import { Lifecycle, scoped } from "tsyringe";
import {
  ConditionContext,
  IterationStatementContext,
  SelectionStatementContext,
  StatementContext,
} from "../grammar/CPP14Parser";
import BlockVisitor from "./BlockVisitor";

export interface ConditionAndStatementContext {
  statementSequence: Array<StatementContext>;
  condition: ConditionContext;
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

  extractStatementsFromCase(
    ctx: SelectionStatementContext
  ): Array<ConditionAndStatementContext> {
    const result = new Array<ConditionAndStatementContext>();
    const switchStatements =
      ctx.statement(0).compoundStatement()?.statementSeq()?.statement() ?? [];

    for (const s of switchStatements) {
      const caseExpression = s.labeledStatement()?.constantExpression();
      const seq = s
        .labeledStatement()
        ?.statement()
        .compoundStatement()
        ?.statementSeq();
    }

    return result;
  }
}
