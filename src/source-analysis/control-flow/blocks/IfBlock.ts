import BasicBlock from "./BasicBlock";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export default class IfBlock extends BasicBlock {
  private readonly _condition: any;

  get condition(): ParserRuleContext | undefined {
    return this._condition;
  }

  constructor(
    scopeDepth: number,
    condition: any,
    parserRuleContext: ParserRuleContext
  ) {
    super(scopeDepth, parserRuleContext);
    this._condition = condition;
  }
}
