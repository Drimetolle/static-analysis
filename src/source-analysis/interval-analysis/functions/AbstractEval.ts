import { apply, max, min } from "ramda";

export interface Eval {
  eval(first: [number, number]): [number, number];
}

export default abstract class AbstractEval implements Eval {
  protected readonly second;

  constructor(second: [number, number]) {
    this.second = second;
  }

  public eval(first: [number, number]): [number, number] {
    return AbstractEval.abstractOperator(first, this.second, this.operation);
  }

  protected abstract operation(first: number, second: number): number;

  private static abstractOperator<T>(
    interval1: [T, T],
    interval2: [T, T],
    operation: (a: T, b: T) => T
  ): [T, T] {
    const xMin = apply<T[], T, T>(min, interval1);
    const yMin = apply<T[], T, T>(min, interval2);
    const xMax = apply<T[], T, T>(max, interval1);
    const yMax = apply<T[], T, T>(max, interval2);

    return [operation(xMin, yMin), operation(xMax, yMax)];
  }
}
