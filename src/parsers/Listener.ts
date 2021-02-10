import { KeyWords } from "../source-code/KeyWords";
import DeclaredVariables from "../source-code/DeclaredVariables";
import { autoInjectable } from "tsyringe";
import GrammarDerivation from "../source-code/GrammarDerivation";
import { CPP14ParserListener } from "../grammar/CPP14ParserListener";
import { ExpressionContext } from "../grammar/CPP14Parser";

@autoInjectable()
export default class Listener implements CPP14ParserListener {
  constructor(private declaredVariables?: DeclaredVariables) {}

  exitExpression(ctx: ExpressionContext): void {
    const assignNode = ctx.assignmentExpression(
      ctx.assignmentExpression().length - 1
    );
    const variable = assignNode.logicalOrExpression()?.text;
    const init = Listener.parseInitStatement(
      assignNode.initializerClause()?.text
    );

    if (variable) {
      this.declaredVariables?.assign(
        variable,
        new GrammarDerivation(
          ctx.start.startIndex,
          ctx.start.stopIndex,
          ctx.start.line,
          init
        ),
        ctx.start.line
      );
    }
  }

  private static parseInitStatement(text: string | undefined): string {
    return text ?? KeyWords.Null;
  }
}
