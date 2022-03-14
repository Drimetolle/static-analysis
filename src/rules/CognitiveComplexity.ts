import Rule from "../linter/Rule";
import LinterContext from "../linter/LinterContext";
import Report from "../linter/issue/Report";
import BasicBlock from "../source-analysis/control-flow/blocks/BasicBlock";
import FunctionBlock from "../source-analysis/control-flow/blocks/FunctionBlock";
import IfBlock from "../source-analysis/control-flow/blocks/IfBlock";
import CaseBlock from "../source-analysis/control-flow/blocks/switch/CaseBlock";
import SwitchBlock from "../source-analysis/control-flow/blocks/switch/SwitchBlock";
import LoopBlock from "../source-analysis/control-flow/blocks/LoopBlock";
import ReturnBlock from "../source-analysis/control-flow/blocks/ReturnBlock";
import BreakBlock from "../source-analysis/control-flow/blocks/BreakBlock";
import ContinueBlock from "../source-analysis/control-flow/blocks/ContinueBlock";
import DefaultCaseBlock from "../source-analysis/control-flow/blocks/switch/DefaultCaseBlock";
import TryBlock from "../source-analysis/control-flow/blocks/exception/TryBlock";
import CatchBlock from "../source-analysis/control-flow/blocks/exception/CatchBlock";

export default class CognitiveComplexity extends Rule {
  private AllowComplexity = 25;

  public run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();
    const functions = this.findAllFunctions(context.cfg);

    for (const cfgChild of functions) {
      const complexityWrapper = { complexity: 1 };
      this.walk(cfgChild, (block) =>
        CognitiveComplexity.addComplexityFromBlock(block, complexityWrapper)
      );

      const { complexity } = complexityWrapper;

      if (complexity > this.AllowComplexity) {
        reports.push(
          new Report(
            `Method cognitive complexity is to high ${complexity}. Allowed complexity ${this.AllowComplexity}.`,
            cfgChild.functionDeclarationNodes
          )
        );
      }
    }

    return reports;
  }

  private static addComplexityFromBlock(
    block: BasicBlock,
    complexityWrapper: { complexity: number }
  ) {
    switch (block.constructor) {
      case LoopBlock:
      case SwitchBlock:
      case IfBlock:
      case TryBlock:
      case CatchBlock:
        complexityWrapper.complexity += block.scopeDepth;
        break;
      case CaseBlock:
      case ReturnBlock:
      case ContinueBlock:
      case BreakBlock:
      case DefaultCaseBlock:
        complexityWrapper.complexity++;
        break;
    }
  }

  private walk(
    cfg: BasicBlock,
    callback: (block: BasicBlock) => void,
    visitedNodes: Map<BasicBlock, boolean> = new Map<BasicBlock, boolean>()
  ) {
    if (!visitedNodes.has(cfg)) {
      callback(cfg);
      visitedNodes.set(cfg, true);
    }

    for (const cfgChild of cfg.blocks) {
      if (!visitedNodes.has(cfgChild)) {
        this.walk(cfgChild, callback, visitedNodes);
      }
    }
  }

  private findAllFunctions(
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
