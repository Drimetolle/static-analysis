import { Eval } from "../MutationBlock";

export default class InitInterval implements Eval {
  private readonly second;

  constructor(second: [number, number]) {
    this.second = second;
  }

  eval(first: [number, number]): [number, number] {
    return this.second;
  }
}
