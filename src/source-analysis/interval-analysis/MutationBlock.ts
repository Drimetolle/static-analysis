import VariableInterval from "./VariableInterval";

export interface Eval {
  eval(first: [number, number]): [number, number];
}

export default class MutationBlock {
  public readonly variable: VariableInterval;
  public readonly mutationFunction: Eval;

  constructor(variable: VariableInterval, mutationFunction: Eval) {
    this.variable = variable;
    this.mutationFunction = mutationFunction;
  }
}
