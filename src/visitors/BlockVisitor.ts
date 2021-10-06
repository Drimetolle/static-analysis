import { Lifecycle, scoped } from "tsyringe";
import { StatementContext } from "../grammar/CPP14Parser";
import { isEmpty } from "ramda";

@scoped(Lifecycle.ContainerScoped)
export default class BlockVisitor {
  getBlockOfStatementsFromStatement(
    ctx: StatementContext
  ): Array<StatementContext> {
    const result = new Array<StatementContext>();
    const blockSequence =
      ctx.compoundStatement()?.statementSeq()?.statement() ?? [];

    if (!isEmpty(blockSequence)) {
      result.push(...blockSequence);
    } else {
      result.push(ctx);
    }

    return result;
  }
}
