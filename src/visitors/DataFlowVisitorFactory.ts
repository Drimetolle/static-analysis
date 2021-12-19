import { inject, Lifecycle, scoped } from "tsyringe";
import DataFlowWalker from "./DataFlowWalker";
import ConditionVisitor from "./ConditionVisitor";
import DeclarationVisitor from "./DeclarationVisitor";
import ANTLRExpressionConverter from "../source-analysis/expression/ANTLRExpressionConverter";
import TypeBuilder from "../types/Type";
import { TypesSource } from "../types/TypesSourceImplementation";

@scoped(Lifecycle.ContainerScoped)
export default class DataFlowVisitorFactory {
  private readonly conditionVisitor: ConditionVisitor;
  private readonly declarationVisitor: DeclarationVisitor;
  private readonly expressionConverter: ANTLRExpressionConverter;
  private readonly typeBuilder: TypeBuilder;

  constructor(
    conditionVisitor: ConditionVisitor,
    declarationVisitor: DeclarationVisitor,
    expressionConverter: ANTLRExpressionConverter,
    typeBuilder: TypeBuilder,
    @inject("TypesSource") private readonly typesSource: TypesSource
  ) {
    this.conditionVisitor = conditionVisitor;
    this.declarationVisitor = declarationVisitor;
    this.expressionConverter = expressionConverter;
    this.typeBuilder = typeBuilder;
    this.typesSource = typesSource;
  }

  createVisitorsForFiles(files: Array<string>): Array<DataFlowWalker> {
    const result = new Array<DataFlowWalker>();

    for (const file of files) {
      result.push(
        new DataFlowWalker(
          file,
          this.conditionVisitor,
          this.declarationVisitor,
          this.expressionConverter,
          this.typeBuilder,
          this.typesSource
        )
      );
    }

    return result;
  }
}
