import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";

export default class CheckPrivateFieldName extends Rule {
  constructor() {
    super(6);
  }

  run(context: LinterContext): Array<Report> {
    return [];
  }
}
