export enum Severity {
  Off,
  Information,
  Warning,
  Error,
}

export type SeverityLevelStrings = keyof typeof Severity;

const severities = ["Off", "Information", "Warning", "Error"];

export function isSeverityString(text: string): text is SeverityLevelStrings {
  return severities.indexOf(text) >= 0;
}
