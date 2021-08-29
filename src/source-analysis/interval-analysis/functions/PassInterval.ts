import AbstractEval from "./AbstractEval";

export default class PassInterval extends AbstractEval {
  protected operation(first: number, second: number): number {
    return first;
  }
}
