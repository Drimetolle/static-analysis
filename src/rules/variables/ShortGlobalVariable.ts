import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import {
  BlockDeclarationContext,
  InitDeclaratorContext,
  TranslationUnitContext,
} from "../../grammar/CPP14Parser";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

class GlobalVariableListener implements CPP14ParserListener {
  private readonly variables;

  constructor(variables: Array<InitDeclaratorContext>) {
    this.variables = variables;
  }

  enterBlockDeclaration(ctx: BlockDeclarationContext) {
    if (ctx.parent?.parent?.parent instanceof TranslationUnitContext) {
      const declarators =
        ctx.simpleDeclaration()?.initDeclaratorList()?.initDeclarator() ?? [];
      this.variables.push(...declarators);
    }
  }
}

export default class ShortGlobalVariable extends Rule {
  run(context: LinterContext): Array<Report> {
    const variables = new Array<InitDeclaratorContext>();
    const printer = new GlobalVariableListener(variables);
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, context.ast);

    return variables
      .filter(ShortGlobalVariable.checkWhenVariableNameLengthGreatThanTwo)
      .map(ShortGlobalVariable.generateReport);
  }

  private static checkWhenVariableNameLengthGreatThanTwo(
    ctx: InitDeclaratorContext
  ): boolean {
    const name = ctx.declarator().text;

    return name.length <= 3;
  }

  private static generateReport(ctx: InitDeclaratorContext): Report {
    const declarator = ctx.declarator();
    const name = declarator.text;

    return new Report(
      `Giving short names to global variables is considered to be bad practice. It is suggested to rename '${name}' variable.`,
      declarator
    );
  }
}
