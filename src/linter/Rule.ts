import LinterContext from "./LinterContext";
import CodeIssue from "./issue/CodeIssue";

export default abstract class Rule {
  readonly id: string;

  protected constructor() {
    this.id = "id";
  }

  abstract run(context: LinterContext): CodeIssue | null;
}
