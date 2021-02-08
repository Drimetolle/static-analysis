import { KeyWords } from "../source-code/KeyWords";
import DeclaredVariables from "../source-code/DeclaredVariables";
import { autoInjectable } from "tsyringe";
import GrammarDerivation from "../source-code/GrammarDerivation";
import { CPP14ParserListener } from "../grammar/CPP14ParserListener";
import {
  ExpressionContext,
  SimpleDeclarationContext,
} from "../grammar/CPP14Parser";

@autoInjectable()
export default class Listener implements CPP14ParserListener {
  constructor(private declaredVariables?: DeclaredVariables) {}

  exitSimpleDeclaration(ctx: SimpleDeclarationContext): void {
    const type = ctx.declSpecifierSeq()?.text;
    const nodeVars =
      ctx
        .initDeclaratorList()
        ?.initDeclarator()
        .map((v) => v) ?? [];
    const vars = nodeVars.slice(0, nodeVars.length - 1).map((n) => n.text);
    const lastDeclaredVar = nodeVars[nodeVars.length - 1];
    vars.push(lastDeclaredVar.declarator().text);
    const init = Listener.parseInitStatement(
      lastDeclaredVar
        .initializer()
        ?.braceOrEqualInitializer()
        ?.initializerClause()?.text
    );

    this.declaredVariables?.declare(
      vars,
      new GrammarDerivation(
        ctx.start.startIndex,
        ctx.start.stopIndex,
        ctx.start.line,
        init
      ),
      1
    );
  }

  exitExpression(ctx: ExpressionContext): void {
    const assignNode = ctx.assignmentExpression(
      ctx.assignmentExpression().length - 1
    );
    const variable = assignNode.logicalOrExpression()?.text;
    const init = Listener.parseInitStatement(
      assignNode.initializerClause()?.text
    );

    if (variable) {
      this.declaredVariables?.assign(
        variable,
        new GrammarDerivation(
          ctx.start.startIndex,
          ctx.start.stopIndex,
          ctx.start.line,
          init
        ),
        1
      );
    }
  }

  private static parseInitStatement(text: string | undefined): string {
    return text ?? KeyWords.Null;
  }
}
