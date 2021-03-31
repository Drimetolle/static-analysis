import Rule from "./Rule";
import { autoInjectable, singleton } from "tsyringe";
import LinterContext from "./LinterContext";
import IssuesQueue from "./issue/IssuesQueue";
import CodeIssue from "./issue/CodeIssue";
import PositionInFile from "../source-analysis/data-objects/PositionInFile";
import LinterConfig from "./LinterConfig";
import RuleResolverHelper from "../utils/RuleResolverHelper";

@singleton()
@autoInjectable()
export default class Linter {
  readonly rules: Array<Rule>;
  private readonly issueService: IssuesQueue;
  private readonly ruleResolver: RuleResolverHelper;

  constructor(
    rules: Array<new () => Rule>,
    config: LinterConfig,
    issueService?: IssuesQueue
  ) {
    this.rules = rules.map((con) => new con());
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.issueService = issueService!;
    this.ruleResolver = new RuleResolverHelper(config);
  }

  start(context: LinterContext): void {
    this.rules.forEach((r) => {
      const issues = r.run(context);

      if (issues.length > 0) {
        for (const issue of issues) {
          this.issueService.add(
            new CodeIssue(
              r.id,
              issue.description,
              new PositionInFile(
                issue.node.start.line,
                issue.node.start.charPositionInLine + 1
              ),
              context.fileName,
              this.ruleResolver.getRuleSeverity(r.id)
            )
          );
        }
      }
    });
  }
}
