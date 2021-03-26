import Rule from "../linter/Rule";
import LinterContext from "../linter/LinterContext";
import CodeIssue from "../linter/issue/CodeIssue";
import PositionInFile from "../source-analysis/data-objects/PositionInFile";
import { Severity } from "../linter/issue/Severity";

export default class UndeclaredVariable extends Rule {
  constructor() {
    super();
  }

  run(context: LinterContext): CodeIssue | null {
    return new CodeIssue(1, "error", new PositionInFile(1, 1), Severity.Error);
  }
}
