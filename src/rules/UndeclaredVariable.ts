import Rule from "../linter/Rule";
import LinterContext from "../linter/LinterContext";
import Report from "../linter/issue/Report";
import { VariableState } from "../source-analysis/data-objects/VariableDeclaration";

export default class UndeclaredVariable extends Rule {
  constructor() {
    super(1);
  }

  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();
    context.scope
      .toArray()
      .flatMap((_) => _.data.declaredVariables.variables)
      .filter((_) => _.state != VariableState.defined)
      .forEach((r) =>
        reports.push(new Report(`Variable ${r.name} is undefined`, r.node))
      );

    return reports;
  }
}
