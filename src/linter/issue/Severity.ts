export enum Severity {
  Skip,
  Warning,
  Error,
  Typo,
}

export type messageLevel = "error" | "warning" | "typo" | "";

export function mapSeverity(s: Severity): messageLevel {
  switch (s) {
    case Severity.Warning:
      return "warning";
    case Severity.Error:
      return "error";
    case Severity.Typo:
      return "typo";
    default:
      return "";
  }
}
