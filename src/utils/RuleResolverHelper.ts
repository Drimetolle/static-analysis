import LinterConfig from "../linter/LinterConfig";
import { Severity } from "../linter/issue/Severity";

export default class RuleResolverHelper {
  private readonly map: Map<number, Severity>;

  constructor(config: LinterConfig) {
    this.map = new Map<number, Severity>();

    for (const key in config.rules) {
      let s: Severity;
      const keyN = Number.parseInt(key);

      switch (config.rules[keyN]) {
        case 0:
          s = Severity.Skip;
          break;
        case 1:
          s = Severity.Warning;
          break;
        case 2:
          s = Severity.Error;
          break;
      }

      this.map.set(keyN, s);
    }
  }

  getRuleSeverity(id: number): Severity {
    return this.map.get(id) ?? Severity.Warning;
  }
}
