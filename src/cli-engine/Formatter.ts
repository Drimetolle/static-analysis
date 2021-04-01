import chalk from "chalk";
import CodeIssue from "../linter/issue/CodeIssue";
import { mapSeverity, messageLevel } from "../linter/issue/Severity";

export default class Formatter {
  static formatMessage(issue: CodeIssue): string {
    return `${issue.fileName}:${issue.link.line}:${
      issue.link.start
    } - ${this.coloredSeverity(mapSeverity(issue.severity))} ${chalk.gray(
      issue.errorCode.toString()
    )}: ${
      issue.description.endsWith(".")
        ? issue.description
        : issue.description + "."
    }`;
  }

  private static coloredSeverity(severity: messageLevel): string {
    switch (severity) {
      case "warning":
        return chalk.yellow(severity);
      case "error":
        return chalk.red(severity);
      case "":
        return chalk.green(severity);
    }
  }
}
