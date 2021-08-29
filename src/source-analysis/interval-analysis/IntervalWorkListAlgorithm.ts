import MutationBlock from "./MutationBlock";
import { difference, equals, max, min, range, reduce } from "ramda";

export default class IntervalWorkListAlgorithm {
  private readonly blocks: Array<MutationBlock>;

  constructor(blocks: Array<MutationBlock>) {
    this.blocks = blocks;
  }

  public calculate() {
    const workList = [0];
    const vars = this.blocks.map((block) => block.variable);
    const functions = this.blocks.map((block) => block.mutationFunction);

    while (workList.length > 0) {
      const i = workList.shift()!;
      const currentVar = vars[i];
      const dependedVars = vars.map((v) => v.interval);
      const result = functions[i].eval(
        reduce(
          IntervalWorkListAlgorithm.join,
          [-Infinity, Infinity],
          dependedVars
        )
      );

      if (!equals(result, currentVar.interval)) {
        currentVar.interval = IntervalWorkListAlgorithm.widening(
          currentVar.interval,
          result
        );

        const newWorkList = [];

        for (let j = 0; j < vars.length; j++) {
          if (currentVar.dependsOn.indexOf(vars[j]) >= 0) {
            newWorkList.push(j);
          }
        }
        const notVisited = difference(newWorkList, workList);
        workList.unshift(...notVisited);
      }
    }

    return vars;
  }

  private static widening(
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

  private static join(
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
}
