import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import {
  BlockDeclarationContext,
  DeclSpecifierContext,
} from "../../grammar/CPP14Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { head } from "ramda";
import { DeclarationSpecifier } from "../../source-analysis/data-objects/DeclarationSpecifier";
import CodeStyleStrategy, { stylePropertyInSchema } from "./CodeStyleStrategy";
import DefaultCodeStyleConfig from "./DefaultCodeStyleConfig";

class ConstVariableListener implements CPP14ParserListener {
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
      if (ConstVariableListener.isConst(simpleDeclaratorSpecifier)) {
        this.variables.push(declarator);
      }
    }

    if (ConstVariableListener.isConst(simpleDeclaratorSpecifier)) {
      this.variables.push(...declarators);
    }
  }

  private static isConst(specifiers: Array<DeclSpecifierContext>) {
    return head(specifiers)?.text == "const";
  }
}

/**
 * @example
  //Bad
  const int g1 = 3;
  const int g2;

  void main() {
    const auto a1;
    const auto *a2;
    const auto &a3;
    const auto a4[];
    const auto *a5[];

    const auto b1 = 1;
    const auto *b2 = 1;
    const auto &b3 = 1;
    const auto b4[] = 1;
    const auto *b5[] = 1;
  }
 */
export default class ConstNames extends Rule {
  constructor() {
    super();
    this.Schema = {
      type: "object",
      properties: {
        ...stylePropertyInSchema,
      },
    };
  }

  run(context: LinterContext): Array<Report> {
    const config = context.getConfig<DefaultCodeStyleConfig>();
    const checker = CodeStyleStrategy.getCodeStyleChecker(config.style);
    const reports = new Array<Report>();

    for (const { data } of context.scope.toArray()) {
      for (const variable of data.declaredVariables.variables) {
        if (
          !checker(variable.variableName) &&
          variable.specifiers.has(DeclarationSpecifier.Const) &&
          !variable.isParameter
        ) {
          reports.push(
            new Report(
              `Const '${variable.variableName}' is not in ${config.style}.`,
              variable.declaration
            )
          );
        }
      }
    }
    return reports;
  }
}
