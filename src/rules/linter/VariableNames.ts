import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { isEmpty } from "ramda";

export default class VariableNames extends Rule {
  isCamelCase(str: string) {
    return /^[a-z0-9]+(?:[A-Z0-9][a-z0-9]+)*$/.test(str);
  }

  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();
    for (const node of context.scope.toArray()) {
      for (const variable of node.data.declaredVariables.variables) {
        const variableName = isEmpty(variable.variable.variableName)
          ? variable.variable.name
          : variable.variable.variableName;
        if (
          !this.isCamelCase(variableName) &&
          /^[a-zA-Z_]+[0-9]*$/.test(variableName)
        ) {
          reports.push(
            new Report(
              `Identifier '${variable.variable.variableName}' is not in camel case.`,
              variable.node
            )
          );
        }
      }
    }
    return reports;
  }
}
