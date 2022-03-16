import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import SwitchBlock from "../../source-analysis/control-flow/blocks/switch/SwitchBlock";
import DefaultCaseBlock from "../../source-analysis/control-flow/blocks/switch/DefaultCaseBlock";
import OutBlock from "../../source-analysis/control-flow/blocks/OutBlock";
import BreakBlock from "../../source-analysis/control-flow/blocks/BreakBlock";

// https://pvs-studio.com/ru/docs/warnings/v2519/
// https://pvs-studio.com/ru/docs/warnings/v2518/
export default class EverySwitchWithDefaultStatement extends Rule {
  run(context: LinterContext): Array<Report> {
    const result = new Array<Report>();
    const switchBlocks = EverySwitchWithDefaultStatement.visitSwitchBlocks(
      context.cfg
    );

    for (const switchBlock of switchBlocks) {
      const defaultCase = EverySwitchWithDefaultStatement.getDefaultBlock(
        switchBlock
      );

      if (!defaultCase) {
        result.push(
          new Report(
            "'switch' statement should have a 'default' label.",
            switchBlock.blocks.map((block) => block.ast)
          )
        );
        continue;
      }

      if (!defaultCase.isFirstOrLast) {
        result.push(
          new Report(
            "The 'default' label should be either the first or the last label of a 'switch' statement.",
            defaultCase.block.ast
          )
        );
      } else if (
        EverySwitchWithDefaultStatement.doesContainsOneOrMoreStatement(
          defaultCase.block
        )
      ) {
        result.push(
          new Report(
            "In addition to the terminating 'break' statement, should contain a statement.",
            defaultCase.block.ast
          )
        );
      }
    }

    return result;
  }

  private static doesContainsOneOrMoreStatement(defaultCase: DefaultCaseBlock) {
    const statements = defaultCase.blocks.filter(
      (block) => !(block instanceof OutBlock) && !(block instanceof BreakBlock)
    );

    return statements.length == 0;
  }

  private static getDefaultBlock(
    cfg: BasicBlock
  ): { block: DefaultCaseBlock; isFirstOrLast: boolean } | null {
    for (let i = 0; i < cfg.blocks.length; i++) {
      const block = cfg.blocks[i];

      if (block instanceof DefaultCaseBlock) {
        if (i == 0) {
          return { block, isFirstOrLast: true };
        }
        if (i == cfg.blocks.length - 1) {
          return { block, isFirstOrLast: true };
        }

        return { block, isFirstOrLast: false };
      }
    }

    return null;
  }

  private static visitSwitchBlocks(
    cfg: BasicBlock,
    result: Array<BasicBlock> = []
  ): Array<BasicBlock> {
    for (const block of cfg.blocks) {
      if (block instanceof SwitchBlock) {
        result.push(block);
      }

      EverySwitchWithDefaultStatement.visitSwitchBlocks(block, result);
    }

    return result;
  }
}
