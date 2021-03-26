import Rule from "./Rule";
import { singleton, autoInjectable } from "tsyringe";
import LinterContext from "./LinterContext";
import IssuesQueue from "./issue/IssuesQueue";

@singleton()
@autoInjectable()
export default class Linter {
  readonly rules: Array<Rule>;
  private readonly issueService: IssuesQueue;

  constructor(rules: Array<new () => Rule>, issueService?: IssuesQueue) {
    this.rules = rules.map((con) => new con());
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.issueService = issueService!;
  }

  start(context: LinterContext): void {
    this.rules.forEach((r) => {
      const issue = r.run(context);

      if (issue) {
        this.issueService.add(issue);
      }
    });
  }
}
