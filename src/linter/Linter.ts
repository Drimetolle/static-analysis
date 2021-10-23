import Rule from "./Rule";
import { autoInjectable, singleton } from "tsyringe";
import LinterContext from "./LinterContext";
import IssuesQueue from "./issue/IssuesQueue";
import CodeIssue from "./issue/CodeIssue";
import PositionInFile from "../source-analysis/data-objects/PositionInFile";
import LinterConfig from "./LinterConfig";
import RuleResolverHelper from "../utils/RuleResolverHelper";
import { Interval } from "antlr4ts/misc";
import { AnalyzerRule } from "../rules";

interface AnalyzerRuleInternal {
  id: string | number;
  rule: Rule;
}

@singleton()
@autoInjectable()
export default class Linter {
  readonly rules: Array<AnalyzerRuleInternal>;
  private readonly issueService: IssuesQueue;
  private readonly ruleResolver: RuleResolverHelper;

  constructor(
    rules: Array<AnalyzerRule>,
    config: LinterConfig,
    issueService?: IssuesQueue
  ) {
    this.rules = rules.map((analyzerRule) => {
      return { id: analyzerRule.id, rule: new analyzerRule.rule() };
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.issueService = issueService!;
    this.ruleResolver = new RuleResolverHelper(config);
  }

  start(context: LinterContext): void {
    this.rules.forEach((r) => {
      const issues = r.rule.run(context);

      if (issues.length > 0) {
        for (const issue of issues) {
          this.issueService.add(
            new CodeIssue(
              r.id.toString(),
              issue.description,
              new PositionInFile(
                issue.node.start?.line ?? 0,
                (issue.node.start?.charPositionInLine ?? 0) + 1
              ),
              context.fileName,
              this.ruleResolver.getRuleSeverity(r.constructor.name),
              issue.node.start.inputStream?.getText(
                new Interval(
                  issue.node.start.startIndex,
                  issue.node.stop!.stopIndex
                )
              ) ?? ""
            )
          );
        }
      }
    });
  }
}
