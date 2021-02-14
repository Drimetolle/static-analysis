import { singleton } from "tsyringe";
import {
  SelectionStatementContext,
  StatementSeqContext,
} from "../grammar/CPP14Parser";

@singleton()
export default class IfElseStatementVisitor {
  ifElseStatement(ctx: SelectionStatementContext): Array<StatementSeqContext> {
    const result = new Array<StatementSeqContext>();
    const statements = ctx.statement() ?? [];
    for (const s of statements) {
      const seq = s.compoundStatement()?.statementSeq();
      const elseStatement = s.selectionStatement();

      if (seq) {
        result.push(seq);
      } else if (elseStatement) {
        const tmp = this.ifElseStatement(elseStatement);
        result.push(...tmp);
      }
    }

    return result;
  }
}
