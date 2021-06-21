import { Lifecycle, scoped } from "tsyringe";
import DataFlowWalker from "./DataFlowWalker";
import ConditionVisitor from "./ConditionVisitor";
import DeclarationVisitor from "./DeclarationVisitor";

@scoped(Lifecycle.ContainerScoped)
export default class DataFlowVisitorFactory {
  private readonly conditionVisitor: ConditionVisitor;
  private readonly declarationVisitor: DeclarationVisitor;

  constructor(
    conditionVisitor: ConditionVisitor,
    declarationVisitor: DeclarationVisitor
  ) {
    this.conditionVisitor = conditionVisitor;
    this.declarationVisitor = declarationVisitor;
  }

  createVisitorsForFiles(files: Array<string>): Array<DataFlowWalker> {
    const result = new Array<DataFlowWalker>();

    for (const file of files) {
      result.push(
        new DataFlowWalker(file, this.conditionVisitor, this.declarationVisitor)
      );
    }

    return result;
  }
}
