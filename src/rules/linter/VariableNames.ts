import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { head } from "ramda";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import {
  BlockDeclarationContext,
  DeclSpecifierContext,
} from "../../grammar/CPP14Parser";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

class VariableNamesListener implements CPP14ParserListener {
  private readonly variables;

  constructor(variables: Array<ParserRuleContext>) {
    this.variables = variables;
  }

  enterBlockDeclaration(ctx: BlockDeclarationContext) {
    const declarators =
      ctx.simpleDeclaration()?.initDeclaratorList()?.initDeclarator() ?? [];

    const simpleDeclaratorSpecifier =
      ctx.simpleDeclaration()?.declSpecifierSeq()?.declSpecifier() ?? [];
    const declarator = simpleDeclaratorSpecifier.pop();
    if (declarator && declarators.length == 0) {
      if (VariableNamesListener.isConst(simpleDeclaratorSpecifier)) {
        this.variables.push(declarator);
      }
    }

    if (VariableNamesListener.isConst(simpleDeclaratorSpecifier)) {
      this.variables.push(...declarators);
    }
  }

  private static isConst(specifiers: Array<DeclSpecifierContext>) {
    return head(specifiers)?.text == "const";
  }
}

/**
 * @example
  int a1aa = 3;
  int a2aa;

  void main() {
    auto *a2;
    auto &a3;
    auto a4[];
    auto *a5[];

    auto b1 = 1;
    auto *b2 = 1;
    auto &b3 = 1;
    auto b4[] = 1;
    auto *b5[] = 1;
  }
 */
export default class VariableNames extends Rule {
  isCamelCase(str: string) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(str);
  }

  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();

    const names = new Array<ParserRuleContext>();
    const listener = new VariableNamesListener(names);
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, context.ast);

    for (const node of context.scope.toArray()) {
      for (const variable of node.data.declaredVariables.variables) {
        if (!this.isCamelCase(variable.variableName)) {
          reports.push(
            new Report(
              `Identifier '${variable.variableName}' is not in camel case.`,
              variable.declaration
            )
          );
        }
      }
    }
    return reports;
  }
}
