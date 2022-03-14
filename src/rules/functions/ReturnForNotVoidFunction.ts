import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import StartBlock from "../../source-analysis/control-flow/blocks/StartBlock";
import FunctionBlock from "../../source-analysis/control-flow/blocks/FunctionBlock";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import ReturnBlock from "../../source-analysis/control-flow/blocks/ReturnBlock";
import { TypeSpecifier } from "../../source-analysis/data-objects/LanguageKeyWords";

/**
 * @example
  //Bad
  int() {}

  //Good
  int() { return 1; }
 */
export default class ReturnForNotVoidFunction extends Rule {
  run(context: LinterContext): Array<Report> {
    const result = new Array<Report>();
    const functionBlocks = ReturnForNotVoidFunction.visitFunctionBlocks(
      context.cfg
    );

    for (const functionBlock of functionBlocks) {
      if (
        functionBlock.type != TypeSpecifier.VOID &&
        !ReturnForNotVoidFunction.hasReturnStatement(functionBlock)
      ) {
        result.push(
          new Report(
            `Function: ${functionBlock.functionDeclaration} doesn't have any return statement or have empty return statement.`,
            functionBlock.functionDeclarationNodes
          )
        );
      }
    }

    return result;
  }

  private static *visitFunctionBlocks(cfg: StartBlock) {
    for (const child of cfg.blocks) {
      if (child instanceof FunctionBlock) {
        yield child;
      }
    }
  }

  private static hasReturnStatement(
    cfg: BasicBlock,
    result: { has: boolean } = { has: false }
  ): boolean {
    for (const block of cfg.blocks) {
      if (block instanceof ReturnBlock && block.ast.text !== "return;") {
        result.has = true;
        return result.has;
      }
      ReturnForNotVoidFunction.hasReturnStatement(block, result);
    }

    return result.has;
  }
}
