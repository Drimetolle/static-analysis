import AbstractEval from "./AbstractEval";

export default class DivisionOnInterval extends AbstractEval {
  protected operation(first: number, second: number): number {
    return Math.ceil(first / second);
  }

  protected createInterval(second: number): [number, number] {
    return [second, second];
  }
}
