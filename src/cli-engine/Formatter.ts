import chalk from "chalk";
import CodeIssue from "../linter/issue/CodeIssue";
import { Severity, SeverityLevelStrings } from "../linter/issue/Severity";

export interface JsonIssueScheme {
  fileName: string;
  code: string;
  level: SeverityLevelStrings;
  link: string;
  description: string;
}

export default class Formatter {
  static formatMessage(issue: CodeIssue): string {
    const maxLineWidth = 80;
    const trimmedLine =
      (issue.line?.length ?? 0) > maxLineWidth
        ? `${issue.line?.substring(0, maxLineWidth)}...`
        : issue.line;
    const line = `\t${trimmedLine}`;
    const underline = `${line}\n\t${this.coloredSeverity(
      issue.severity,
      new Array(line.length - 1).fill("~").join("")
    )}`;
    return `${issue.fileName}:${issue.link.line}:${
      issue.link.start
    } - ${this.coloredSeverity(
      issue.severity,
      Severity[issue.severity]
    )} ${chalk.gray(issue.errorCode.toString())}: ${
      issue.description.endsWith(".")
        ? issue.description
        : issue.description + "."
    }\n${underline}`;
  }

  static formatMessageToJson(issue: CodeIssue): JsonIssueScheme {
    return {
      fileName: issue.fileName,
      code: issue.errorCode,
      level: Severity[issue.severity] as SeverityLevelStrings,
      link: `${issue.link.line}:${issue.link.start}`,
      description: issue.description.endsWith(".")
        ? issue.description
        : issue.description + ".",
    };
  }

  private static coloredSeverity(severity: Severity, message: string): string {
    switch (severity) {
      case Severity.Warning:
        return chalk.yellow(message);
      case Severity.Error:
        return chalk.red(message);
      case Severity.Information:
        return chalk.green(message);
      case Severity.Off:
        return chalk.green(message);
    }
  }
}
