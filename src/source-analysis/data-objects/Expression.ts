import { AssignmentExpressionContext } from "../../grammar/CPP14Parser";

export default class Expression {
  private node?: AssignmentExpressionContext;

  constructor();
  constructor(node: AssignmentExpressionContext);
  constructor(node?: AssignmentExpressionContext) {
    this.node = node;
  }

  get text(): string {
    return this.node?.text ?? "";
  }
}
