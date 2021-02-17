import { singleton } from "tsyringe";
import { SimpleDeclarationContext } from "../grammar/CPP14Parser";
import GrammarDerivation from "../source-code/data-objects/GrammarDerivation";
import { CppTypes } from "../source-code/data-objects/CppTypes";
import { DeclarationVar } from "../source-code/data-objects/DTOs";
import { KeyWords } from "../source-code/data-objects/KeyWords";

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

    const lastDeclaredVar = nodeVars[nodeVars.length - 1];
    const init = VariableDeclaratorVisitor.parseInitStatement(
      lastDeclaredVar
        .initializer()
        ?.braceOrEqualInitializer()
        ?.initializerClause()?.text
    );

    return {
      variable: lastDeclaredVar.declarator().text,
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
