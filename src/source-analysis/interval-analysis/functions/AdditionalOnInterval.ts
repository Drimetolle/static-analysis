import AbstractEval from "./AbstractEval";

export default class AdditionalOnInterval extends AbstractEval {
  protected operation(first: number, second: number): number {
    return first + second;
  }
}
