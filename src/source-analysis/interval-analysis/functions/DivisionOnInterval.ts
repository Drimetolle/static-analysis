import AbstractEval from "./AbstractEval";

export default class DivisionOnInterval extends AbstractEval {
  protected operation(first: number, second: number): number {
    return first / second;
  }
}
