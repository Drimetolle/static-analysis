import BasicBlock from "../BasicBlock";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export default class SwitchBlock extends BasicBlock {
  private readonly condition: Array<any> | any;

  constructor(
    scopeDepth: number,
    condition: any,
    parserRuleContext: ParserRuleContext
  ) {
    super(scopeDepth, parserRuleContext);
    this.condition = condition;
  }
}
