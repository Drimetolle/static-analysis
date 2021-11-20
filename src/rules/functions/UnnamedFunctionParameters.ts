import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParameterDeclarationContext } from "../../grammar/CPP14Parser";
import { head } from "ramda";

class FunctionArgumentListener implements CPP14ParserListener {
  private readonly parameters: Array<ParameterDeclarationContext>;

  constructor(parameters: Array<ParameterDeclarationContext>) {
    this.parameters = parameters;
  }

  enterParameterDeclaration(ctx: ParameterDeclarationContext) {
    const specifiers = ctx.declSpecifierSeq().declSpecifier() ?? [];
    const declarator = head(specifiers);
    const hasNamedArgument =
      declarator
        ?.typeSpecifier()
        ?.trailingTypeSpecifier()
        ?.simpleTypeSpecifier()
        ?.theTypeName() != undefined ?? false;

    if (!hasNamedArgument) {
      this.parameters.push(ctx);
    }
  }
}

/**
 * @example
  //Bad
  main(int) {
  }
 */
export default class UnnamedFunctionParameters extends Rule {
  run(context: LinterContext): Array<Report> {
    const parameters = new Array<ParameterDeclarationContext>();
    const listener = new FunctionArgumentListener(parameters);
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, context.ast);

    return parameters.map((parameter) => new Report("", parameter));
  }
}
