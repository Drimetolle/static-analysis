import AbstractEval from "./AbstractEval";

export default class InitInterval extends AbstractEval {
  protected operation(first: number, second: number): number {
    return second;
  }
}