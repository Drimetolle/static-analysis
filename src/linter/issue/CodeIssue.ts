import PositionInFile from "../../source-analysis/data-objects/PositionInFile";
import { mapSeverity, Severity } from "./Severity";

export default class CodeIssue {
  readonly errorCode: number;
  readonly description: string;
  readonly link: PositionInFile;
  readonly fileName: string;
  readonly severity: Severity;

  constructor(
    errorCode: number,
    description: string,
    link: PositionInFile,
    fileName: string,
    severity: Severity
  ) {
    this.errorCode = errorCode;
    this.description = description;
    this.link = link;
    this.fileName = fileName;
    this.severity = severity;
  }

  toString(): string {
    return `${this.fileName}:${this.link.line}:${
      this.link.start
    } - ${mapSeverity(this.severity)} ${this.errorCode}: ${this.description}`;
  }
}
