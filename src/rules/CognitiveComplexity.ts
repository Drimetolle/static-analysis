import Rule from "../linter/Rule";
import LinterContext from "../linter/LinterContext";
import Report from "../linter/issue/Report";
import BasicBlock from "../source-analysis/control-flow/blocks/BasicBlock";
import FunctionBlock from "../source-analysis/control-flow/blocks/FunctionBlock";

export default class CognitiveComplexity extends Rule {
  constructor() {
    super(5);
  }

  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();
    const functions = this.findAllFunctions(context.cfg);
    let blockCounter = 0;
    let edgeCounter = 0;

    function walk(
      cfg: BasicBlock,
      visitedNodes: Map<BasicBlock, boolean> = new Map<BasicBlock, boolean>()
    ) {
      if (!visitedNodes.has(cfg)) {
        visitedNodes.set(cfg, true);
      }

      for (const cfgChild of cfg.blocks) {
        if (!visitedNodes.has(cfgChild)) {
          blockCounter++;
          edgeCounter += cfgChild.blocks.length;
          walk(cfgChild, visitedNodes);
        }
      }
    }

    for (const cfgChild of functions) {
      blockCounter = 0;
      edgeCounter = 0;
      walk(cfgChild);
      const complexity = edgeCounter / blockCounter;
      console.log(complexity);
      if (complexity >= 1) {
        reports.push(
          new Report("Method cognitive complexity is to high", {} as any)
        );
      }
    }

    return reports;
  }

  findAllFunctions(
    cfg: BasicBlock,
    visitedNodes: Map<BasicBlock, boolean> = new Map<BasicBlock, boolean>(),
    functions: Array<FunctionBlock> = new Array<FunctionBlock>()
  ) {
    if (!visitedNodes.has(cfg)) {
      visitedNodes.set(cfg, true);
    }

    for (const cfgChild of cfg.blocks) {
      if (!visitedNodes.has(cfgChild)) {
        if (cfgChild instanceof FunctionBlock) {
          functions.push(cfgChild);
        }

        this.findAllFunctions(cfgChild, visitedNodes, functions);
      }
    }

    return functions;
  }
}
