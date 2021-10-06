import VariableInterval from "./VariableInterval";
import { Eval } from "./functions/AbstractEval";

export default class MutationBlock {
  public readonly variable: VariableInterval;
  public readonly mutationFunction: Eval;

  constructor(variable: VariableInterval, mutationFunction: Eval) {
    this.variable = variable;
    this.mutationFunction = mutationFunction;
  }
}
