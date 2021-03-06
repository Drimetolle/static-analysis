import { singleton } from "tsyringe";
import CodeIssue from "./CodeIssue";
import { clone } from "ramda";

export type IssueDelegate = <T extends CodeIssue>(issue: T) => void;

@singleton()
export default class IssuesQueue {
  private readonly _issues: Array<CodeIssue>;
  private readonly subscribers: Array<IssueDelegate>;

  get issues(): Array<CodeIssue> {
    return clone(this._issues);
  }

  constructor() {
    this._issues = [];
    this.subscribers = [];
  }

  add(issue: CodeIssue): void {
    this._issues.push(issue);

    this.notifyAll(issue);
  }

  subscribe(callback: IssueDelegate): void {
    this.subscribers.push(callback);
  }

  private notifyAll(issue: CodeIssue) {
    this.subscribers.forEach((c) => c(issue));
  }
}
