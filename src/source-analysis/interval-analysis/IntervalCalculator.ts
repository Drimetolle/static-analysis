import { apply, equals, max, min, union } from "ramda";

//file:///C:/Users/drime/Desktop/%D0%92%D0%9A%D0%A0/interval%20analisis/Widening_Narrowing.pdf операции
export default class IntervalCalculator {
  public calculatePossibleValue(
    interval1: [number, number],
    interval2: [number, number],
    lowestInterval: [number, number] = [-Infinity, Infinity]
  ): [number, number] {
    return this.narrowing(
      this.widening(interval1, interval2, lowestInterval),
      interval2,
      lowestInterval
    );
  }

  public join(
    [a, b]: [number, number],
    [c, d]: [number, number],
    lowestInterval: [number, number] = [-Infinity, Infinity]
  ): [number, number] {
    if (equals([a, b], lowestInterval)) {
      return [c, d];
    }
    if (equals([c, d], lowestInterval)) {
      return [a, b];
    }
    return [min(a, c), max(b, d)];
  }

  public meet(
    [a, b]: [number, number],
    [c, d]: [number, number],
    lowestInterval: [number, number] = [-Infinity, Infinity]
  ): [number, number] {
    if (equals([a, b], lowestInterval) || equals([c, d], lowestInterval)) {
      return lowestInterval;
    }

    if (max(a, c) > min(a, c)) {
      return lowestInterval;
    }

    return [max(a, c), min(b, d)];
  }

  // public join(
  //   interval1: [number, number],
  //   interval2: [number, number]
  // ): [number, number] {
  //   return IntervalCalculator.abstractOperator(interval1, interval2, union);
  // }
  //
  // public join2(
  //   interval1: [number, number],
  //   interval2: [number, number]
  // ): [number, number] {
  //   return IntervalCalculator.abstractOperator2<number>(
  //     interval1,
  //     interval2,
  //     (a: number, b: number) => a + b
  //   );
  // }

  private static abstractOperator2<T>(
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

  private static abstractOperator<T>(
    interval1: [T, T],
    interval2: [T, T],
    operation: (a: Array<T>, b: Array<T>) => Array<T>
  ): [T, T] {
    return [
      apply<T[], T, T>(min, operation(interval1, interval2)),
      apply<T[], T, T>(max, operation(interval1, interval2)),
    ];
  }

  public widening(
    interval1: [number, number],
    interval2: [number, number],
    lowestInterval: [number, number] = [-Infinity, Infinity]
  ): [number, number] {
    if (equals(interval1, lowestInterval)) {
      return interval2;
    }
    if (equals(interval2, lowestInterval)) {
      return interval1;
    }

    const [a, b] = interval1;
    const [c, d] = interval2;
    return [c < a ? -Infinity : a, b < d ? Infinity : b];
  }

  public narrowing(
    interval1: [number, number],
    interval2: [number, number],
    lowestInterval: [number, number] = [-Infinity, Infinity]
  ): [number, number] {
    if (
      equals(interval1, lowestInterval) ||
      equals(interval2, lowestInterval)
    ) {
      return lowestInterval;
    }

    const [a, b] = interval1;
    const [c, d] = interval2;
    return [a == -Infinity ? c : a, b == Infinity ? d : b];
  }
}
