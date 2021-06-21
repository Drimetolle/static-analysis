import { Lifecycle, scoped } from "tsyringe";
import DataFlowVisitor from "./DataFlowVisitor";
import ConditionVisitor from "./ConditionVisitor";

@scoped(Lifecycle.ContainerScoped)
export default class DataFlowVisitorFactory {
  private readonly conditionVisitor: ConditionVisitor;

  constructor(conditionVisitor: ConditionVisitor) {
    this.conditionVisitor = conditionVisitor;
  }

  createVisitorsForFiles(files: Array<string>): Array<DataFlowVisitor> {
    const result = new Array<DataFlowVisitor>();

    for (const file of files) {
      result.push(new DataFlowVisitor(file, this.conditionVisitor));
    }

    return result;
  }
}
