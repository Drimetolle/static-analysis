import { CGrammarListener } from "../grammar/CGrammarListener";
import { InitDeclaratorContext } from "../grammar/CGrammarParser";

export default class Listener implements CGrammarListener {
  exitInitDeclarator(ctx: InitDeclaratorContext) {
    //TODO int z, x = 10 + 13; (not working)
    const declare = ctx.declarator().text;
    const init = ctx.initializer()?.text ?? "null";
    console.log(declare);
    console.log(init);
  }
}
