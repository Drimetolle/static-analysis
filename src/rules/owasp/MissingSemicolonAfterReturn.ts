import Rule from "../../linter/Rule";
import Report from "../../linter/issue/Report";
import LinterContext from "../../linter/LinterContext";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import IfBlock from "../../source-analysis/control-flow/blocks/IfBlock";
import { last } from "ramda";
import ReturnBlock from "../../source-analysis/control-flow/blocks/ReturnBlock";
import { Interval } from "antlr4ts/misc";
import LoopBlock from "../../source-analysis/control-flow/blocks/LoopBlock";

// https://pvs-studio.com/ru/docs/warnings/v5001/
export default class MissingSemicolonAfterReturn extends Rule {
  run(context: LinterContext): Array<Report> {
    const result = new Array<Report>();
    const ifStatements = MissingSemicolonAfterReturn.visitLinearBlocks(
      context.cfg
    );

    for (const statement of ifStatements) {
      const lastBlockInRay = last(statement.blocks);
      if (
        lastBlockInRay instanceof ReturnBlock &&
        MissingSemicolonAfterReturn.hasNewLineCharacter(lastBlockInRay)
      ) {
        result.push(
          new Report(
            "It is highly probable that the semicolon ';' is missing after 'return' keyword.",
            lastBlockInRay.ast
          )
        );
      }
    }

    return result;
  }

  private static hasNewLineCharacter(block?: BasicBlock) {
    if (!block) {
      return false;
    }

    const rawCode =
      block.ast.start.inputStream?.getText(
        new Interval(block.ast.start.startIndex, block.ast.stop!.stopIndex)
      ) ?? "";

    const matchArray = rawCode.match(/^return(\r\n|\n|\r|\s*?).*?;/) ?? [];

    return matchArray.length > 0;
  }

  private static visitLinearBlocks(
    cfg: BasicBlock,
    result: Array<BasicBlock> = []
  ): Array<BasicBlock> {
    for (const block of cfg.blocks) {
      if (block instanceof IfBlock || block instanceof LoopBlock) {
        result.push(block);
      }

      MissingSemicolonAfterReturn.visitLinearBlocks(block, result);
    }

    return result;
  }
}
