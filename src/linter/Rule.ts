import LinterContext from "./LinterContext";
import CodeIssue from "./issue/CodeIssue";

export default class Rule {
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }

  run(context: LinterContext): CodeIssue | null {
    return null;
  }
}
