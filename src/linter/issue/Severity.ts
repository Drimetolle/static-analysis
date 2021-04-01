export enum Severity {
  Skip,
  Warning,
  Error,
}

export type messageLevel = "error" | "warning" | "";

export function mapSeverity(s: Severity): messageLevel {
  switch (s) {
    case Severity.Warning:
      return "warning";
    case Severity.Error:
      return "error";
    default:
      return "";
  }
}
