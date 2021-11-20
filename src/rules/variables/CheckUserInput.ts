import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import LinearBlock from "../../source-analysis/control-flow/blocks/LinearBlock";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { InitializerListContext } from "../../grammar/CPP14Parser";

class FunctionCallListener implements CPP14ParserListener {
  enterInitializerList(ctx: InitializerListContext) {
    // ctx.initializerClause().splice(0, 1);
  }
}

export default class CheckUserInput extends Rule {
  run(context: LinterContext): Array<Report> {
    for (const block of CheckUserInput.visitLinearBlocks(context.cfg)) {
      if (block.ast.text.indexOf("scanf") >= 0) {
        const listener = new FunctionCallListener();
        ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, block.ast);
      }
    }
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
      CheckUserInput.visitLinearBlocks(block, result);
    }

    return result;
  }
}
