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
