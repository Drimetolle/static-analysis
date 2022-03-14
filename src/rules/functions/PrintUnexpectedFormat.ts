import Rule from "../../linter/Rule";
import Report from "../../linter/issue/Report";
import LinterContext from "../../linter/LinterContext";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import LinearBlock from "../../source-analysis/control-flow/blocks/LinearBlock";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { InitializerListContext } from "../../grammar/CPP14Parser";
import { head, tail } from "ramda";
import { TypeSpecifier } from "../../source-analysis/data-objects/LanguageKeyWords";
import { DeclaratorSpecifier } from "../../source-analysis/data-objects/DeclaratorSpecifier";

class FunctionCallListener implements CPP14ParserListener {
  private readonly variables: Array<string>;

  constructor(variables: Array<string>) {
    this.variables = variables;
  }

  enterInitializerList(ctx: InitializerListContext) {
    let callArguments = ctx.initializerClause();

    for (const argument of callArguments) {
      this.variables.push(argument.text);
    }
  }
}

/**
 * @example
 * void main() {
 *   double a;
 *   int b;
 * 	 cprintf("%d", a); // Bad
 *   sprintf("%d %d", b); // Bad
 *   cprintf("%d", b); // Good
 *   sprintf("%d %d", b, b); // Good
 * }
 */
export default class PrintUnexpectedFormat extends Rule {
  // https://codeforwin.org/2015/05/list-of-all-format-specifiers-in-c-programming.html
  private static formatSpecifier = /%c|%d|%e|%E|%f|%g|%G|%s/g;

  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();

    for (const block of PrintUnexpectedFormat.visitLinearBlocks(context.cfg)) {
      if (/[c|s]?print/.test(block.ast.text)) {
        const args = new Array<string>();
        const listener = new FunctionCallListener(args);
        ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, block.ast);

        reports.push(
          ...Array.from(PrintUnexpectedFormat.createReports(args, block))
        );
      }
    }

    return reports;
  }

  private static *createReports(args: Array<string>, blockContext: BasicBlock) {
    const format = head(args);
    args = tail(args);
    const formatKeys = PrintUnexpectedFormat.getFormats(format);

    if (formatKeys.length > args.length) {
      yield new Report(
        `Missing arguments for format ${format}`,
        blockContext.ast
      );
    }

    for (let i = 0; i < args.length; i++) {
      const variable = blockContext.scope?.getVariable(args[i]);

      if (!variable) {
        continue;
      }

      switch (formatKeys[i]) {
        case "%c":
          if (!PrintUnexpectedFormat.isChar(variable.type)) {
            yield new Report(
              `Char is expected rather than a "${variable.type}"`,
              blockContext.ast
            );
          }
          break;
        case "%d":
          if (!PrintUnexpectedFormat.isSignedInteger(variable.type)) {
            yield new Report(
              `Signed integer is expected rather than a "${variable.type}"`,
              blockContext.ast
            );
          }
          break;
        case "%e":
        case "%E":
        case "%g":
        case "%G":
          if (!PrintUnexpectedFormat.isDouble(variable.type)) {
            yield new Report(
              `Double is expected rather than a "${variable.type}"`,
              blockContext.ast
            );
          }
          break;
        case "%f":
          if (variable.type != TypeSpecifier.FLOAT) {
            yield new Report(
              `Double is expected rather than a "${variable.type}"`,
              blockContext.ast
            );
          }
          break;
        case "%s":
          if (
            !(
              variable.type == TypeSpecifier.CHAR &&
              variable.declarators.has(DeclaratorSpecifier.Pointer)
            )
          ) {
            yield new Report(
              `String is expected rather than a "${variable.type}"`,
              blockContext.ast
            );
          }
          break;
      }
    }
  }

  private static isSignedInteger(type: TypeSpecifier | undefined) {
    if (!type) {
      return true;
    }

    return (
      type == TypeSpecifier.INT ||
      type == TypeSpecifier.LONG ||
      type == TypeSpecifier.SHORT ||
      type == TypeSpecifier.UNSIGNED_SHORT
    );
  }

  private static isChar(type: TypeSpecifier | undefined) {
    if (!type) {
      return true;
    }

    return type == TypeSpecifier.CHAR || type == TypeSpecifier.UNSIGNED_CHAR;
  }

  private static isDouble(type: TypeSpecifier | undefined) {
    if (!type) {
      return true;
    }

    return type == TypeSpecifier.DOUBLE || type == TypeSpecifier.FLOAT;
  }

  private static getFormats(formatString: string | undefined): Array<string> {
    if (!formatString) {
      return [];
    }
    return [
      ...formatString.matchAll(PrintUnexpectedFormat.formatSpecifier),
    ].flatMap((_) => _);
  }

  private static visitLinearBlocks(
    cfg: BasicBlock,
    result: Array<BasicBlock> = []
  ): Array<BasicBlock> {
    for (const block of cfg.blocks) {
      if (block instanceof LinearBlock) {
        result.push(block);
      }

      PrintUnexpectedFormat.visitLinearBlocks(block, result);
    }

    return result;
  }
}
