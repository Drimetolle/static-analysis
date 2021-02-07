import { CGrammarListener } from "../grammar/CGrammarListener";
import { DeclarationContext } from "../grammar/CGrammarParser";
import { KeyWords } from "../source-code/KeyWords";
import DeclaredVariables from "../source-code/DeclaredVariables";
import { autoInjectable } from "tsyringe";
import GrammarDerivation from "../source-code/GrammarDerivation";

@autoInjectable()
export default class Listener implements CGrammarListener {
  constructor(private declaredVariables?: DeclaredVariables) {}

  exitDeclaration(ctx: DeclarationContext): void {
    const listOfVariables =
      ctx.initDeclaratorList()?.initDeclaratorList()?.text.split(",") ?? [];
    const lastDeclarationVariable = ctx
      .initDeclaratorList()
      ?.initDeclarator()
      ?.declarator()?.text;
    const init =
      ctx.initDeclaratorList()?.initDeclarator().initializer()?.text ??
      KeyWords.Null;

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
}
