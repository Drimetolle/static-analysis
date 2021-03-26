import Rule from "../linter/Rule";
import LinterContext from "../linter/LinterContext";
import Report from "../linter/issue/Report";

export default class UndeclaredVariable extends Rule {
  constructor() {
    super(1);
  }

  run(context: LinterContext): Report | null {
    return new Report("error", context.ast);
  }
}
