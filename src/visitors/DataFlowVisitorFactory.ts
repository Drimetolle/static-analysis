import { Lifecycle, scoped } from "tsyringe";
import DataFlowWalker from "./DataFlowWalker";
import ConditionVisitor from "./ConditionVisitor";
import DeclarationVisitor from "./DeclarationVisitor";
import ANTLRExpressionConverter from "../source-analysis/expression/ANTLRExpressionConverter";

@scoped(Lifecycle.ContainerScoped)
export default class DataFlowVisitorFactory {
  private readonly conditionVisitor: ConditionVisitor;
  private readonly declarationVisitor: DeclarationVisitor;
  private readonly expressionConverter: ANTLRExpressionConverter;

  constructor(
    conditionVisitor: ConditionVisitor,
    declarationVisitor: DeclarationVisitor,
    expressionConverter: ANTLRExpressionConverter
  ) {
    this.conditionVisitor = conditionVisitor;
    this.declarationVisitor = declarationVisitor;
    this.expressionConverter = expressionConverter;
  }

  createVisitorsForFiles(files: Array<string>): Array<DataFlowWalker> {
    const result = new Array<DataFlowWalker>();

    for (const file of files) {
      result.push(
        new DataFlowWalker(
          file,
          this.conditionVisitor,
          this.declarationVisitor,
          this.expressionConverter
        )
      );
    }

    return result;
  }
}
