import { Lifecycle, scoped } from "tsyringe";
import { ExpressionContext } from "../../grammar/CPP14Parser";

@scoped(Lifecycle.ContainerScoped)
export default class ANTLRExpressionConverter {
  public convertExpression(expression: ExpressionContext) {
    console.log(expression.text);
  }
}
