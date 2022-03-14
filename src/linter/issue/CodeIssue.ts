import PositionInFile from "../../source-analysis/data-objects/PositionInFile";
import { Severity } from "./Severity";

export default class CodeIssue {
  readonly errorCode: string;
  readonly description: string;
  readonly link: PositionInFile;
  readonly fileName: string;
  readonly severity: Severity;
  readonly line?: string;

  constructor(
    errorCode: string,
    description: string,
    link: PositionInFile,
    fileName: string,
    severity: Severity
  );
  constructor(
    errorCode: string,
    description: string,
    link: PositionInFile,
    fileName: string,
    severity: Severity,
    line: string
  );
  constructor(
    errorCode: string,
    description: string,
    link: PositionInFile,
    fileName: string,
    severity: Severity,
    line?: string
  ) {
    this.errorCode = errorCode;
    this.description = description;
    this.link = link;
    this.fileName = fileName;
    this.severity = severity;
    this.line = line;
  }

  toString(): string {
    return `${this.fileName}:${this.link.line}:${this.link.start} - ${
      Severity[this.severity]
    } ${this.errorCode}: ${this.description}`;
  }
}
