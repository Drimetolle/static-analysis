import { Severity } from "../linter/issue/Severity";
import { DiagnosticSeverity } from "vscode";

export default class SeverityConverter {
  static convert(severity: Severity): DiagnosticSeverity {
    switch (severity) {
      case Severity.Skip:
        return DiagnosticSeverity.Hint;
      case Severity.Warning:
        return DiagnosticSeverity.Warning;
      case Severity.Error:
        return DiagnosticSeverity.Error;
      case Severity.Typo:
        return DiagnosticSeverity.Information;
    }
  }
}
