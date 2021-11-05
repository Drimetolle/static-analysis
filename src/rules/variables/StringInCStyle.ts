import Rule from "../../linter/Rule";
import Report from "../../linter/issue/Report";
import LinterContext from "../../linter/LinterContext";
import { TypeSpecifier } from "../../source-analysis/data-objects/LanguageKeyWords";

export default class StringInCStyle extends Rule {
  run(context: LinterContext): Array<Report> {
    if (context.fileName.indexOf(".cpp") == -1) {
      return [];
    }

    const a = context.scope
      .toArray()
      .flatMap((_) => _.data.declaredVariables.variables)
      .filter((variable) => {
        return (
          variable.type == TypeSpecifier.CHAR &&
          variable.variable.name.indexOf("*") >= 0
        );
      });

    return a.map(
      (variable) =>
        new Report("C style text string. Use 'string'", variable.node)
    );
  }
}
