import LinterConfig from "../linter/LinterConfig";
import { Severity } from "../linter/issue/Severity";

export default class RuleResolverHelper {
  private readonly map: Map<string, Severity>;

  constructor(config: LinterConfig) {
    this.map = new Map<string, Severity>();

    for (const key in config.rules) {
      this.map.set(key, config.rules[key]);
    }
  }

  getRuleSeverity(id: string): Severity {
    return this.map.get(id) ?? Severity.Warning;
  }
}
