import Rule from "./Rule";
import { singleton } from "tsyringe";

@singleton()
export default class Linter {
  readonly rules: Array<Rule>;

  constructor(rules: Array<Rule>) {
    this.rules = rules;
  }
}
