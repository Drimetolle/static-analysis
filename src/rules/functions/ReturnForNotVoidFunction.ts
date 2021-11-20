import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";

/**
 * @example
  //Bad
  int() {}

  //Good
  int() { return 1; }
 */
export default class ReturnForNotVoidFunction extends Rule {
  run(context: LinterContext): Array<Report> {
    return [];
  }
}
