import { TypeSpecifier } from "../data-objects/LanguageKeyWords";
import { numberLimits } from "../type/IntervalsForNumberTypes";

export default class VariableInterval {
  public interval: [number, number];
  public readonly type: TypeSpecifier;
  public readonly dependsOn: Array<VariableInterval>;

  constructor(type: TypeSpecifier, dependsOn: Array<VariableInterval>) {
    this.type = type;
    this.dependsOn = dependsOn;
    this.interval = [-Infinity, Infinity];
  }

  public get minMaxInterval() {
    return numberLimits[this.type];
  }

  public addDependency(variable: VariableInterval) {
    this.dependsOn.push(variable);
  }
}
