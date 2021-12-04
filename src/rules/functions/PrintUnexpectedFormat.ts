import Rule from "../../linter/Rule";
import Report from "../../linter/issue/Report";
import LinterContext from "../../linter/LinterContext";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import LinearBlock from "../../source-analysis/control-flow/blocks/LinearBlock";
import IfBlock from "../../source-analysis/control-flow/blocks/IfBlock";

export default class PrintUnexpectedFormat extends Rule {
  run(context: LinterContext): Array<Report> {
    return [];
  }

  private static visitLinearBlocks(
    cfg: BasicBlock,
    result: Array<BasicBlock> = []
  ): Array<BasicBlock> {
    for (const block of cfg.blocks) {
      if (block instanceof LinearBlock) {
        result.push(block);
      }
      if (block instanceof IfBlock) {
        result.push(block);
      }

      PrintUnexpectedFormat.visitLinearBlocks(block, result);
    }

    return result;
  }
}
