import { Lifecycle, scoped } from "tsyringe";
import {
  ConditionContext,
  ConstantExpressionContext,
  IterationStatementContext,
  SelectionStatementContext,
  StatementContext,
} from "../grammar/CPP14Parser";
import BlockVisitor from "./BlockVisitor";
import { isEmpty } from "ramda";

export interface ConditionAndStatementContext {
  statementSequence: Array<StatementContext>;
  condition: ConditionContext;
}

export interface ExpressionAndStatementContext {
  statementSequence: Array<StatementContext>;
  expression: ConstantExpressionContext | Array<ConstantExpressionContext>;
}

export interface CaseStatement {
  cases: Array<ExpressionAndStatementContext>;
  defaultCase: Array<StatementContext>;
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

    for (const s of statements) {
      const seq = s.compoundStatement()?.statementSeq();
      const elseStatement = s.selectionStatement();

      if (seq) {
        result.push({
          statementSequence: this.blockVisitor.getBlockOfStatementsFromStatement(
            s
          ),
          condition: ctx.condition(),
        });
      } else if (elseStatement) {
        const tmp = this.extractStatementsFromIfElse(elseStatement);
        result.push(...tmp);
      }
    }

    return result;
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
    let defaultCase: undefined | Array<StatementContext>;

    for (const switchStatement of switchStatements) {
      const caseExpression = switchStatement
        .labeledStatement()
        ?.constantExpression();

      const caseExpressions = ConditionVisitor.extractCaseStatements(
        switchStatement
      );

      const seq = this.blockVisitor.getBlockOfStatementsFromStatement(
        switchStatement!.labeledStatement()!.statement()
      );

      if (caseExpression) {
        if (isEmpty(caseExpressions)) {
          result.push({
            statementSequence: seq,
            expression: caseExpression,
          });
        } else {
          caseExpressions.unshift(caseExpression);
          result.push({
            statementSequence: seq,
            expression: caseExpressions,
          });
        }
      } else {
        defaultCase = seq;
      }
    }

    return { cases: result, defaultCase: defaultCase ?? [] };
  }

  private static extractCaseStatements(
    statement: StatementContext
  ): Array<ConstantExpressionContext> {
    const cases = new Array<ConstantExpressionContext>();
    let caseStatement = statement.labeledStatement()?.statement();

    while (caseStatement) {
      const constantExpression = caseStatement
        .labeledStatement()
        ?.constantExpression();

      if (constantExpression) {
        cases.push(constantExpression);
      }
      caseStatement = caseStatement.labeledStatement()?.statement();
    }

    return cases;
  }
}
