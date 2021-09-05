import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";

export default class VariableNames extends Rule {
  constructor() {
    super(3);
  }

  isSnakeCase(str: string) {
    return /^[a-z]+([A-Z][a-z]+)*$/.test(str);
  }

  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();
    for (const node of context.scope.toArray()) {
      for (const variable of node.data.declaredVariables.variables) {
        if (!this.isSnakeCase(variable.variable.name)) {
          reports.push(
            new Report(
              `Identifier ${variable.variable.name} is not in snake case.`,
              variable.node
            )
          );
        }
      }
    }
    return reports;
  }
}
