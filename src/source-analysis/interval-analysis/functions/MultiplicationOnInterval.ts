import AbstractEval from "./AbstractEval";

export default class MultiplicationOnInterval extends AbstractEval {
  protected operation(first: number, second: number): number {
    return first * second;
  }
}
