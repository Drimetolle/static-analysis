import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";

export default class UndeclaredVariable extends Rule {
  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();
    context.scope
      .toArray()
      .flatMap((_) => _.data.declaredVariables.variables)
      .filter((_) => _.variable.isUndefined())
      .forEach((r) =>
        reports.push(
          new Report(`Variable ${r.variable.name} is undefined`, r.node)
        )
      );

    return reports;
  }
}
