import Rule from "../../linter/Rule";
import Report from "../../linter/issue/Report";
import LinterContext from "../../linter/LinterContext";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import CatchBlock from "../../source-analysis/control-flow/blocks/exception/CatchBlock";

// https://pvs-studio.com/ru/docs/warnings/v5002/
export default class AnEmptyExceptionHandler extends Rule {
  run(context: LinterContext): Array<Report> {
    const result = new Array<Report>();
    const catchBlocks = AnEmptyExceptionHandler.visitCatchBlocks(context.cfg);

    for (const catchBlock of catchBlocks) {
      if (catchBlock.blocks.length <= 1) {
        result.push(
          new Report(
            "Silent suppression of exceptions can hide the presence of bugs in source code during testing.",
            catchBlock.ast
          )
        );
      }
    }

    return result;
  }

  private static visitCatchBlocks(
    cfg: BasicBlock,
    result: Array<BasicBlock> = []
  ): Array<BasicBlock> {
    for (const block of cfg.blocks) {
      if (block instanceof CatchBlock) {
        result.push(block);
      }

      AnEmptyExceptionHandler.visitCatchBlocks(block, result);
    }

    return result;
  }
}
