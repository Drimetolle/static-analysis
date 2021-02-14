import { singleton } from "tsyringe";
import { SimpleDeclarationContext } from "../grammar/CPP14Parser";
import GrammarDerivation from "../source-code/GrammarDerivation";
import { CppTypes } from "../source-code/CppTypes";
import { DeclarationVar } from "../source-code/DTOs";
import { KeyWords } from "../source-code/KeyWords";

@singleton()
export default class VariableDeclaratorVisitor {
  simpleDeclaration(ctx: SimpleDeclarationContext): DeclarationVar {
    const rawType = ctx.declSpecifierSeq()?.text.toUpperCase() ?? CppTypes.VOID;
    const type = CppTypes[rawType as keyof typeof CppTypes];
    const nodeVars =
      ctx
        .initDeclaratorList()
        ?.initDeclarator()
        .map((v) => v) ?? [];
    const vars = nodeVars.slice(0, nodeVars.length - 1).map((n) => n.text);
    const lastDeclaredVar = nodeVars[nodeVars.length - 1];
    vars.push(lastDeclaredVar.declarator().text);
    const init = VariableDeclaratorVisitor.parseInitStatement(
      lastDeclaredVar
        .initializer()
        ?.braceOrEqualInitializer()
        ?.initializerClause()?.text
    );

    return {
      variable: vars,
      grammar: new GrammarDerivation(
        ctx.start.startIndex,
        ctx.start.stopIndex,
        ctx.start.line,
        init
      ),
      line: ctx.start.line,
      start: ctx.start.startIndex,
      type: type,
    } as DeclarationVar;
  }

  private static parseInitStatement(text: string | undefined): string {
    return text ?? KeyWords.Null;
  }
}
