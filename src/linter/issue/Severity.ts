export enum Severity {
  Skip,
  Warning,
  Error,
}

export function mapSeverity(s: Severity): string {
  switch (s) {
    case Severity.Warning:
      return "warning";
    case Severity.Error:
      return "error";
    default:
      return "";
  }
}
