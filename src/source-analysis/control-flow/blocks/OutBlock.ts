import BasicBlock from "./BasicBlock";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export default class OutBlock extends BasicBlock {
  constructor(scopeDepth: number, parserRuleContext: ParserRuleContext) {
    super(scopeDepth, parserRuleContext);
  }
}
