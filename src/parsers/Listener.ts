import { CGrammarListener } from "../grammar/CGrammarListener";
import { InitDeclaratorContext } from "../grammar/CGrammarParser";
import { KeyWords } from "../source-code/KeyWords";
import DeclaredVariables from "../source-code/DeclaredVariables";
import { autoInjectable } from "tsyringe";
import GrammarDerivation from "../source-code/GrammarDerivation";

@autoInjectable()
export default class Listener implements CGrammarListener {
  constructor(private declaredVariables?: DeclaredVariables) {}

  exitInitDeclarator(ctx: InitDeclaratorContext): void {
    //TODO int z, x = 10 + 13; (not working)
    const declare = ctx.declarator().text;
    const init = ctx.initializer()?.text ?? KeyWords.Null;

    this.declaredVariables?.declare(
      new GrammarDerivation(1, 1, 1, declare),
      new GrammarDerivation(1, 1, 1, init),
      1
    );
  }
}
