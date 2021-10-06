import { singleton } from "tsyringe";
import CodeIssue from "./CodeIssue";
import { clone } from "ramda";

export type IssueDelegate = <T extends CodeIssue>(issue: T) => void;

@singleton()
export default class IssuesQueue {
  private readonly _issues: Array<CodeIssue>;
  private readonly subscribers: Array<IssueDelegate>;

  get issues(): Array<CodeIssue> {
    const result = clone(this._issues);
    this._issues.splice(0, this._issues.length);
    return result;
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
