import FunctionBlock from "../control-flow/blocks/FunctionBlock";
import BasicBlock from "../control-flow/blocks/BasicBlock";
import MutationBlock from "./MutationBlock";
import VariableInterval from "./VariableInterval";
import InitInterval from "./functions/InitInterval";
import IntervalWorkListAlgorithm from "./IntervalWorkListAlgorithm";

export default class IntervalsGenerator {
  private readonly visitedNodes;

  constructor() {
    this.visitedNodes = new Set<BasicBlock>();
  }

  public test(block: FunctionBlock) {
    const vars = this.walk(block);
    if (vars.length > 0) {
      const calculator = new IntervalWorkListAlgorithm(vars);

      return calculator.calculate().map((v) => v.interval);
    }

    return [];
  }

  private walk(block: BasicBlock, result: Array<MutationBlock> = []) {
    if (this.visitedNodes.has(block)) {
      return result;
    }

    this.visitedNodes.add(block);
    const constantVar = Number(
      block.scope?.data?.declaredVariables.getVariable("x")?.expression?.text
    );
    console.log(
      block.scope?.data?.declaredVariables.getVariable("x")?.expression?.text
    );
    if (Number.isInteger(constantVar)) {
      const variable = new VariableInterval(
        block.scope?.data.declaredVariables.getVariable("x")?.type!,
        []
      );
      result.push(new MutationBlock(variable, new InitInterval(constantVar)));
    }

    for (const childrenBlock of block.blocks) {
      this.walk(childrenBlock, result);
    }

    return result;
  }
}
