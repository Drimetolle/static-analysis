type Severity = 0 | 1 | 2;

interface Rule {
  [id: number]: Severity;
}

export default interface LinterConfig {
  readonly rules: Rule;
}
