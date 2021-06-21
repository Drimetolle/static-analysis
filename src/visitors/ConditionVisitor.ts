import { Lifecycle, scoped } from "tsyringe";
import {
  ConditionContext,
  ConstantExpressionContext,
  IterationStatementContext,
  SelectionStatementContext,
  StatementContext,
} from "../grammar/CPP14Parser";
import BlockVisitor from "./BlockVisitor";

export interface ConditionAndStatementContext {
  statementSequence: Array<StatementContext>;
  condition: ConditionContext;
}

export interface ExpressionAndStatementContext {
  statementSequence: Array<StatementContext>;
  expression: ConstantExpressionContext;
}

export interface CaseStatement {
  cases: Array<ExpressionAndStatementContext>;
  defaultCase: undefined | Array<StatementContext>;
}

@scoped(Lifecycle.ContainerScoped)
export default class ConditionVisitor {
  private readonly blockVisitor: BlockVisitor;

  constructor(blockVisitor: BlockVisitor) {
    this.blockVisitor = blockVisitor;
  }

  extractStatementsFromIfElse(
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

  extractStatementsFromLoop(
    ctx: IterationStatementContext
  ): Array<StatementContext> {
    return this.blockVisitor.getBlockOfStatementsFromStatement(ctx.statement());
  }

  extractStatementsFromCase(ctx: SelectionStatementContext): CaseStatement {
    const result = new Array<ExpressionAndStatementContext>();
    const switchStatements =
      ctx.statement(0).compoundStatement()?.statementSeq()?.statement() ?? [];
    let defaultCase: undefined | Array<StatementContext>;

    for (const s of switchStatements) {
      const caseExpression = s.labeledStatement()?.constantExpression();
      const seq = this.blockVisitor.getBlockOfStatementsFromStatement(
        s!.labeledStatement()!.statement()
      );

      if (caseExpression) {
        result.push({ statementSequence: seq, expression: caseExpression });
      } else {
        defaultCase = seq;
      }
    }

    return { cases: result, defaultCase };
  }
}
