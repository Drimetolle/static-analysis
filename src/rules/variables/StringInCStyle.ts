import Rule from "../../linter/Rule";
import Report from "../../linter/issue/Report";
import LinterContext from "../../linter/LinterContext";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import {
  DeclarationStatementContext,
  InitDeclaratorContext,
} from "../../grammar/CPP14Parser";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { TypeSpecifier } from "../../source-analysis/data-objects/LanguageKeyWords";

class InitStringVariableListener implements CPP14ParserListener {
  private readonly variables;

  constructor(variables: Array<InitDeclaratorContext>) {
    this.variables = variables;
  }

  enterDeclarationStatement(ctx: DeclarationStatementContext) {}
}

export default class StringInCStyle extends Rule {
  run(context: LinterContext): Array<Report> {
    if (context.fileName.indexOf(".cpp") == -1) {
      return [];
    }

    const a = context.scope
      .toArray()
      .flatMap((_) => _.data.declaredVariables.variables)
      .filter((variable) => {
        return (
          variable.type == TypeSpecifier.CHAR &&
          variable.variable.name.indexOf("*") >= 0
        );
      });
    const variables = Array<any>();
    const printer = new InitStringVariableListener(variables);
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, context.ast);

    return a.map(
      (variable) =>
        new Report("C style text string. Use 'string'", variable.node)
    );
  }
}
