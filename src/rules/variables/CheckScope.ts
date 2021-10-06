import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";

export default class CheckScope extends Rule {
  constructor() {
    super(2);
  }

  run(context: LinterContext): Array<Report> {
    return [];
  }
}
