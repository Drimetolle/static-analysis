import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { DefineDeclarationContext } from "../../grammar/CPP14Parser";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { isCppFile } from "../../utils/Utils";

class DefineMacrosListener implements CPP14ParserListener {
  private readonly variables;

  constructor(variables: Array<DefineDeclarationContext>) {
    this.variables = variables;
  }

  enterDefineDeclaration(ctx: DefineDeclarationContext) {
    if (ctx.IntegerLiteral()?.text) {
      this.variables.push(ctx);
    }
  }
}

/**
 * @example
  #define a 123;
  #define b;
 */
export default class UseConstInsteadMacro extends Rule {
  run(context: LinterContext): Array<Report> {
    if (!isCppFile(context.fileName)) {
      return [];
    }

    const variables = new Array<DefineDeclarationContext>();
    const printer = new DefineMacrosListener(variables);
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, context.ast);

    return variables.map(UseConstInsteadMacro.generateReport);
  }

  private static generateReport(ctx: DefineDeclarationContext): Report {
    return new Report(`Use const instead #define macros.`, ctx);
  }
}
