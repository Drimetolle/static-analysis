import { Lifecycle, scoped } from "tsyringe";
import {
  ConditionContext,
  ConstantExpressionContext,
  IterationStatementContext,
  LabeledStatementContext,
  SelectionStatementContext,
  StatementContext,
} from "../grammar/CPP14Parser";
import BlockVisitor from "./BlockVisitor";
import { isEmpty } from "ramda";

export interface ConditionAndStatementContext {
  statementSequence: Array<StatementContext>;
  condition: ConditionContext | null;
}

export interface ExpressionAndStatementContext {
  statementSequence: Array<StatementContext>;
  expression:
    | undefined
    | ConstantExpressionContext
    | Array<ConstantExpressionContext>;
}

export interface CaseStatement {
  cases: Array<ExpressionAndStatementContext>;
}

interface CaseAndBlock {
  cases: Array<ConstantExpressionContext>;
  block: Array<StatementContext>;
}

@scoped(Lifecycle.ContainerScoped)
export default class ConditionVisitor {
  private readonly blockVisitor: BlockVisitor;

  constructor(blockVisitor: BlockVisitor) {
    this.blockVisitor = blockVisitor;
  }

  public extractStatementsFromIfElse(
    ctx: SelectionStatementContext
  ): Array<ConditionAndStatementContext> {
    const result = new Array<ConditionAndStatementContext>();
    const statements = ctx.statement() ?? [];

    // Only for single if and else
    if (
      ctx.statement().length >= 2 &&
      ctx.statement(1).selectionStatement() == null
    ) {
      result.push({
        statementSequence: this.blockVisitor.getBlockOfStatementsFromStatement(
          statements[0]
        ),
        condition: ctx.condition(),
      });

      result.push({
        condition: null,
        statementSequence: this.blockVisitor.getBlockOfStatementsFromStatement(
          statements[1]
        ),
      });

      return result;
    }

    // For other case
    for (const statement of statements) {
      const elseStatement = statement.selectionStatement();

      if (elseStatement) {
        result.push(...this.extractElseIf(elseStatement));
      } else {
        result.push({
          statementSequence: this.blockVisitor.getBlockOfStatementsFromStatement(
            statement
          ),
          condition: ctx.condition(),
        });
      }

      // For else when exist else if
      if (elseStatement) {
        const elseBlock = ConditionVisitor.getElseStatement(elseStatement);

        result.push({
          condition: null,
          statementSequence: this.blockVisitor.getBlockOfStatementsFromStatement(
            elseBlock
          ),
        });
      }
    }

    return result;
  }

  private extractElseIf(conditionStatement: SelectionStatementContext) {
    const result = new Array<ConditionAndStatementContext>();
    if (conditionStatement.statement().length == 2) {
      const elseIfStatement = this.extractStatementsFromIfElse(
        conditionStatement
      );
      result.push({
        statementSequence: elseIfStatement[0].statementSequence,
        condition: elseIfStatement[0].condition,
      });

      const nextElseIf = conditionStatement.statement(1).selectionStatement();
      if (nextElseIf) {
        result.push(...this.extractElseIf(nextElseIf));
      }
    }

    return result;
  }

  private static getElseStatement(
    conditionStatement: SelectionStatementContext
  ): StatementContext {
    if (conditionStatement.statement().length <= 1) {
      return conditionStatement.statement(0);
    }

    const cond = conditionStatement.statement(1).selectionStatement();
    if (!cond) {
      return conditionStatement.statement(1);
    }

    return ConditionVisitor.getElseStatement(cond);
  }

  public extractStatementsFromLoop(
    ctx: IterationStatementContext
  ): Array<StatementContext> {
    return this.blockVisitor.getBlockOfStatementsFromStatement(ctx.statement());
  }

  public extractStatementsFromCase(
    ctx: SelectionStatementContext
  ): CaseStatement {
    const result = new Array<ExpressionAndStatementContext>();
    const switchStatements =
      ctx.statement(0).compoundStatement()?.statementSeq()?.statement() ?? [];

    for (const switchStatement of switchStatements) {
      const caseExpression = switchStatement
        .labeledStatement()
        ?.constantExpression();

      const caseBlock = ConditionVisitor.extractCaseAndBlockStatements(
        switchStatement
      );

      let seq = new Array<StatementContext>();

      if (
        switchStatement.labeledStatement() instanceof LabeledStatementContext
      ) {
        const statements = this.blockVisitor.getBlockOfStatementsFromStatement(
          switchStatement.labeledStatement()!.statement()
        );
        seq.push(...statements);
      } else {
        seq.push(switchStatement);
      }

      if (caseExpression) {
        if (isEmpty(caseBlock.cases)) {
          result.push({
            statementSequence: seq,
            expression: caseExpression,
          });
        } else {
          caseBlock.cases.unshift(caseExpression);
          result.push({
            statementSequence: caseBlock.block,
            expression: caseBlock.cases,
          });
        }
      } else {
        // For default case
        result.push({
          expression: undefined,
          statementSequence: seq,
        });
      }
    }

    return { cases: result };
  }

  private static extractCaseAndBlockStatements(
    statement: StatementContext
  ): CaseAndBlock {
    const cases = new Array<ConstantExpressionContext>();
    let caseStatement = statement.labeledStatement()?.statement();

    while (caseStatement) {
      const constantExpression = caseStatement
        .labeledStatement()
        ?.constantExpression();

      if (constantExpression) {
        cases.push(constantExpression);
      }
      const newCaseStatement = caseStatement.labeledStatement()?.statement();

      if (newCaseStatement == null) {
        break;
      }
      caseStatement = newCaseStatement;
    }

    return {
      cases: cases,
      block:
        caseStatement?.compoundStatement()?.statementSeq()?.statement() ?? [],
    };
  }
}
