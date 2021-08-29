import AbstractEval from "./AbstractEval";

export default class SubtractionOnInterval extends AbstractEval {
  protected operation(first: number, second: number): number {
    return first - second;
  }
}
