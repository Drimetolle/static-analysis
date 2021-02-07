import { CGrammarListener } from "../grammar/CGrammarListener";
import {
  AssignmentExpressionContext,
  DeclarationContext,
} from "../grammar/CGrammarParser";
import { KeyWords } from "../source-code/KeyWords";
import DeclaredVariables from "../source-code/DeclaredVariables";
import { autoInjectable } from "tsyringe";
import GrammarDerivation from "../source-code/GrammarDerivation";

@autoInjectable()
export default class Listener implements CGrammarListener {
  constructor(private declaredVariables?: DeclaredVariables) {}

  exitAssignmentExpression(ctx: AssignmentExpressionContext): void {
    const variable = ctx.unaryExpression()?.text;
    if (variable) {
      this.declaredVariables?.declare(
        variable,
        new GrammarDerivation(
          ctx.start.startIndex,
          ctx.start.stopIndex,
          ctx.start.line,
          Listener.parseInitStatement(ctx.assignmentExpression()?.text)
        ),
        1
      );
    }
  }

  exitDeclaration(ctx: DeclarationContext): void {
    const listOfVariables =
      ctx.initDeclaratorList()?.initDeclaratorList()?.text.split(",") ?? [];
    const lastDeclarationVariable = ctx
      .initDeclaratorList()
      ?.initDeclarator()
      ?.declarator()?.text;
    const init = Listener.parseInitStatement(
      ctx.initDeclaratorList()?.initDeclarator().initializer()?.text
    );

    if (lastDeclarationVariable) {
      listOfVariables.push(lastDeclarationVariable);
    }

    this.declaredVariables?.declare(
      listOfVariables,
      new GrammarDerivation(
        ctx.start.startIndex,
        ctx.start.stopIndex,
        ctx.start.line,
        init
      ),
      1
    );
  }

  private static parseInitStatement(text: string | undefined): string {
    return text ?? KeyWords.Null;
  }
}
