import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import IfBlock from "../../source-analysis/control-flow/blocks/IfBlock";
import LoopBlock from "../../source-analysis/control-flow/blocks/LoopBlock";
import SwitchBlock from "../../source-analysis/control-flow/blocks/switch/SwitchBlock";

export default class ToNestedCode extends Rule {
  run(context: LinterContext): Array<Report> {
    const result = new Array<Report>();
    const blocks = this.findBlockWithDepthThree(context.cfg);

    for (const block of new Set(blocks)) {
      result.push(
        new Report(
          `Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply`,
          block
        )
      );
    }

    return result;
  }

  private findBlockWithDepthThree(
    block: BasicBlock,
    result: Array<ParserRuleContext> = []
  ): Array<ParserRuleContext> {
    for (const child of block.blocks) {
      if (child.scopeDepth >= 2 && ToNestedCode.isFlowBlock(child)) {
        result.push(child.ast);
      }

      this.findBlockWithDepthThree(child, result);
    }

    return result;
  }

  private static isFlowBlock(block: BasicBlock) {
    return (
      block instanceof IfBlock ||
      block instanceof LoopBlock ||
      block instanceof SwitchBlock
    );
  }
}
