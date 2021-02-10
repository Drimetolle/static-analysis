import { singleton } from "tsyringe";
import { SimpleDeclarationContext } from "../grammar/CPP14Parser";
import GrammarDerivation from "./GrammarDerivation";
import { CppTypes } from "./CppTypes";
import { DeclarationVar } from "./DTOs";
import { KeyWords } from "./KeyWords";

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
    const init = this.parseInitStatement(
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
      id: ctx.start.line.toString(),
      type: type,
    } as DeclarationVar;
  }

  private parseInitStatement(text: string | undefined): string {
    return text ?? KeyWords.Null;
  }
}
