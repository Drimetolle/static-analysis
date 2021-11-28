import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export default class ToNestedCode extends Rule {
  run(context: LinterContext): Array<Report> {
    const result = new Array<Report>();
    const blocks = this.findBlockWithDepthThree(context.cfg);

    for (const block of blocks) {
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
      if (child.scopeDepth >= 2) {
        result?.push(child.ast);
      }

      this.findBlockWithDepthThree(child, result);
    }

    return result;
  }
}
