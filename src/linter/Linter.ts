import Rule from "./Rule";
import { autoInjectable, singleton } from "tsyringe";
import LinterContext from "./LinterContext";
import IssuesQueue from "./issue/IssuesQueue";
import CodeIssue from "./issue/CodeIssue";
import PositionInFile from "../source-analysis/data-objects/PositionInFile";
import { Interval } from "antlr4ts/misc";
import * as console from "console";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleConfig } from "./LinterConfig";
import { head } from "ramda";

export interface AnalyzerRuleInternal {
  id: string | number;
  rule: Rule;
  config: RuleConfig;
}

@singleton()
@autoInjectable()
export default class Linter {
  readonly rules: Array<AnalyzerRuleInternal>;
  private readonly issueService: IssuesQueue;

  constructor(rules: Array<AnalyzerRuleInternal>, issueService?: IssuesQueue) {
    this.rules = rules;
    this.issueService = issueService!;
  }

  start(context: LinterContext): void {
    this.rules.forEach((ruleContext) => {
      const issues = [];

      try {
        context.config = ruleContext.config[1];
        issues.push(...ruleContext.rule.run(context));
      } catch (error) {
        console.error(context.fileName, error);
      }

      for (const issue of issues) {
        this.issueService.add(
          new CodeIssue(
            ruleContext.id.toString(),
            issue.description,
            new PositionInFile(
              issue.node.start?.line ?? 0,
              (issue.node.start?.charPositionInLine ?? 0) + 1
            ),
            context.fileName,
            head(ruleContext.config),
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
