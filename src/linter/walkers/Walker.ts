import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export interface Walker<T> {
  start(tree: ParserRuleContext): Promise<T>;
}
