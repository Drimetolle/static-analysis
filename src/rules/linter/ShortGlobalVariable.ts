import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import {
  BlockDeclarationContext,
  TranslationUnitContext,
} from "../../grammar/CPP14Parser";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

class GlobalVariableListener implements CPP14ParserListener {
  private readonly variables;

  constructor(variables: Array<ParserRuleContext>) {
    this.variables = variables;
  }

  enterBlockDeclaration(ctx: BlockDeclarationContext) {
    if (ctx.parent?.parent?.parent instanceof TranslationUnitContext) {
      const declarators =
        ctx.simpleDeclaration()?.initDeclaratorList()?.initDeclarator() ?? [];

      const declarator = (
        ctx.simpleDeclaration()?.declSpecifierSeq()?.declSpecifier() ?? []
      ).pop();
      if (declarator && declarators.length == 0) {
        this.variables.push(declarator);
      }

      this.variables.push(
        ...declarators.map((declarator) => declarator.declarator())
      );
    }
  }
}

/**
 * @example
  // Bad
  const int a = 1;
  const int b;
  int c;
  
  // Good
  const int three = 3;
  const int four;
  int five;
 */
export default class ShortGlobalVariable extends Rule {
  run(context: LinterContext): Array<Report> {
    const variables = new Array<ParserRuleContext>();
    const printer = new GlobalVariableListener(variables);
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, context.ast);

    return variables
      .filter(ShortGlobalVariable.checkWhenVariableNameLengthGreatThanTwo)
      .map(ShortGlobalVariable.generateReport);
  }

  private static checkWhenVariableNameLengthGreatThanTwo(
    ctx: ParserRuleContext
  ): boolean {
    const name = ctx.text;

    return name.length <= 3;
  }

  private static generateReport(ctx: ParserRuleContext): Report {
    const declarator = ctx;
    const name = declarator.text;

    return new Report(
      `Giving short names to global variables is considered to be bad practice. It is suggested to rename '${name}' variable.`,
      declarator
    );
  }
}
