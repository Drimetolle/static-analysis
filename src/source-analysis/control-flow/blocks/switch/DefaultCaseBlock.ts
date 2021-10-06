import AbstractCaseBlock from "./AbstractCaseBlock";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export default class DefaultCaseBlock extends AbstractCaseBlock {
  constructor(scopeDepth: number, parserRuleContext: ParserRuleContext) {
    super(scopeDepth, parserRuleContext);
  }
}
