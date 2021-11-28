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
import * as console from "console";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

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
    this.issueService = issueService!;
    this.ruleResolver = new RuleResolverHelper(config);
  }

  start(context: LinterContext): void {
    this.rules.forEach((r) => {
      const issues = [];

      try {
        issues.push(...r.rule.run(context));
      } catch (error) {
        console.error(context.fileName, error);
      }

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
            this.ruleResolver.getRuleSeverity(r.rule.constructor.name),
            Linter.mergeNodeToText(issue.nodes)
          )
        );
      }
    });
  }

  private static mergeNodeToText(nodes: Array<ParserRuleContext>): string {
    let line = "";

    for (const node of nodes) {
      const tmp =
        node.start.inputStream?.getText(
          new Interval(node.start.startIndex, node.stop!.stopIndex)
        ) ?? "";
      line += ` ${tmp}`;
    }

    return line.trim();
  }
}
