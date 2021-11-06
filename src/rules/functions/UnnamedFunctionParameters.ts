import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";

export default class UnnamedFunctionParameters extends Rule {
  run(context: LinterContext): Array<Report> {
    return [];
  }
}
