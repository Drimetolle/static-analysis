import { Walker } from "./Walker";
import { autoInjectable } from "tsyringe";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

@autoInjectable()
export default class WalkersHelper {
  async analyze<T>(walker: Walker<T>, ast: ParserRuleContext): Promise<T> {
    return await walker.start(ast);
  }
}
