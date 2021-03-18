import Rule from "./Rule";

export default class Linter {
  readonly rules: Array<Rule>;

  constructor(rules: Array<Rule>) {
    this.rules = rules;
  }
}
