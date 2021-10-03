import Rule from "../linter/Rule";
import LinterContext from "../linter/LinterContext";
import Report from "../linter/issue/Report";

export default class CognitiveComplexity extends Rule {
  constructor() {
    super(5);
  }

  run(context: LinterContext): Array<Report> {
    return [];
  }
}
