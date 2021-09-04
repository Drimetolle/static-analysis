import { Eval } from "./AbstractEval";

export default class InitInterval implements Eval {
  private readonly second: [number, number];

  constructor(second: number);
  constructor(second: [number, number]);
  constructor(second: unknown) {
    if (typeof second == "number") {
      this.second = [second, second];
    } else if (Array.isArray(second) && second.length >= 2) {
      this.second = [second[0], second[1]];
    } else {
      throw new Error("Incorrect type");
    }
  }

  eval(first: [number, number]): [number, number] {
    return this.second;
  }
}
