import { CGrammarListener } from "../grammar/CGrammarListener";
import { InitDeclaratorContext } from "../grammar/CGrammarParser";
import { KeyWords } from "../source-code/KeyWords";

export default class Listener implements CGrammarListener {
  exitInitDeclarator(ctx: InitDeclaratorContext): void {
    //TODO int z, x = 10 + 13; (not working)
    const declare = ctx.declarator().text;
    const init = ctx.initializer()?.text ?? KeyWords.Null;
    console.log(declare);
    console.log(init);
  }
}
