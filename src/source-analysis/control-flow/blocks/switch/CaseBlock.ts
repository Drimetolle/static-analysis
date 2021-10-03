import AbstractCaseBlock from "./AbstractCaseBlock";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export default class CaseBlock extends AbstractCaseBlock {
  private readonly condition: Array<any> | any;

  constructor(
    scopeDepth: number,
    condition: any,
    parserRuleContext: ParserRuleContext
  ) {
    super(scopeDepth, parserRuleContext);
    this.condition = condition;
  }

  public isSingleCondition() {
    return !Array.isArray(this.condition);
  }
}
