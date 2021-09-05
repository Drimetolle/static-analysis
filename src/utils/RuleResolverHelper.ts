import LinterConfig from "../linter/LinterConfig";
import { Severity } from "../linter/issue/Severity";

export default class RuleResolverHelper {
  private readonly map: Map<number, Severity>;

  constructor(config: LinterConfig) {
    this.map = new Map<number, Severity>();

    for (const key in config.rules) {
      const keyN = Number.parseInt(key);
      this.map.set(keyN, config.rules[keyN]);
    }
  }

  getRuleSeverity(id: number): Severity {
    return this.map.get(id) ?? Severity.Warning;
  }
}
