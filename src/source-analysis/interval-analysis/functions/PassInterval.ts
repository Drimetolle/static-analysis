import AbstractEval from "./AbstractEval";

export default class PassInterval extends AbstractEval {
  protected operation(first: number, second: number): number {
    return first;
  }

  protected createInterval(second: number): [number, number] {
    return [0, 0];
  }
}
