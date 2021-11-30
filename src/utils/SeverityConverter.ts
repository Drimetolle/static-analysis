import { Severity } from "../linter/issue/Severity";
import { DiagnosticSeverity } from "vscode";

export default class SeverityConverter {
  static convert(severity: Severity): DiagnosticSeverity {
    switch (severity) {
      case Severity.Off:
        return DiagnosticSeverity.Hint;
      case Severity.Warning:
        return DiagnosticSeverity.Warning;
      case Severity.Error:
        return DiagnosticSeverity.Error;
      case Severity.Information:
        return DiagnosticSeverity.Information;
    }
  }
}
