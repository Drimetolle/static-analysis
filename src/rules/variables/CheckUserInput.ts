import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";

export default class CheckUserInput extends Rule {
  run(context: LinterContext): Array<Report> {
    return [];
  }
}
