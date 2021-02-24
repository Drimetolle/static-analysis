import {
  ConditionContext,
  IterationStatementContext,
  SelectionStatementContext,
  StatementSeqContext,
} from "../grammar/CPP14Parser";

interface ConditionAndStatementContext {
  statement: StatementSeqContext;
  condition: ConditionContext;
}

export function loopStatement(
  ctx: IterationStatementContext
): StatementSeqContext | null {
  const statementSeq = ctx.statement().compoundStatement()?.statementSeq();

  return statementSeq ?? null;
}

export function ifElseStatement(
  ctx: SelectionStatementContext
): Array<ConditionAndStatementContext> {
  const result = new Array<ConditionAndStatementContext>();
  const statements = ctx.statement() ?? [];

  for (const s of statements) {
    const seq = s.compoundStatement()?.statementSeq();
    const elseStatement = s.selectionStatement();

    if (seq) {
      result.push({ statement: seq, condition: ctx.condition() });
    } else if (elseStatement) {
      const tmp = ifElseStatement(elseStatement);
      result.push(...tmp);
    }
  }

  return result;
}
