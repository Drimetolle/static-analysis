import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { head, isEmpty } from "ramda";
import EmptyNodesInReport from "../../exceptions/EmptyNodesInReport";

export default class Report {
  readonly description: string;
  private readonly _nodes: Array<ParserRuleContext>;

  get node(): ParserRuleContext {
    return head(this._nodes)!;
  }

  get nodes(): Array<ParserRuleContext> {
    return this._nodes;
  }

  constructor(description: string, node: ParserRuleContext);
  constructor(description: string, nodes: Array<ParserRuleContext>);
  constructor(
    description: string,
    nodes: ParserRuleContext | Array<ParserRuleContext>
  ) {
    if (isEmpty(nodes)) {
      throw new EmptyNodesInReport();
    }

    this.description = description;
    this._nodes = Array.isArray(nodes) ? nodes : [nodes];
  }
}
