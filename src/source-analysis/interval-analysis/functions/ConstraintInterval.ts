import { Eval } from "./AbstractEval";
import { equals, max, min } from "ramda";

export default class ConstraintInterval implements Eval {
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
    return ConstraintInterval.meet(first, this.second);
  }

  private static meet(
    [a, b]: [number, number],
    [c, d]: [number, number],
    lowestInterval: [number, number] = [-Infinity, Infinity]
  ): [number, number] {
    if (equals([a, b], lowestInterval) || equals([c, d], lowestInterval)) {
      return lowestInterval;
    }

    const minBound = min(b, d);
    const maxBound = max(a, c);

    if (maxBound > minBound) {
      return lowestInterval;
    }

    return [maxBound, minBound];
  }
}
