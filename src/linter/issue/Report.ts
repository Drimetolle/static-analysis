import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export default class Report {
  description: string;
  node: ParserRuleContext;

  constructor(description: string, node: ParserRuleContext) {
    this.description = description;
    this.node = node;
  }
}
