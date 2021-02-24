import {
  DeclaratorContext,
  DeclSpecifierSeqContext,
  InitializerClauseContext,
  SimpleDeclarationContext,
} from "../grammar/CPP14Parser";
import DeclarationVar from "../source-code/data-objects/DeclarationVar";
import {
  CppTypes,
  KeyWords,
} from "../source-code/data-objects/LanguageKeyWords";
import GrammarDerivation from "../source-code/data-objects/GrammarDerivation";

export function createDeclaration(
  dec: DeclaratorContext,
  init?: InitializerClauseContext,
  decSeq?: DeclSpecifierSeqContext
): DeclarationVar {
  const rawType = decSeq?.text.toUpperCase() ?? CppTypes.VOID;
  const type = CppTypes[rawType as keyof typeof CppTypes];

  const initInner = parseInitStatement(init?.text);

  return new DeclarationVar(
    dec.text,
    new GrammarDerivation(
      dec.start.startIndex,
      dec.start.stopIndex,
      dec.start.line,
      initInner
    ),
    type
  );
}

export function simpleDeclaration(
  ctx: SimpleDeclarationContext
): DeclarationVar {
  const nodeVars =
    ctx
      .initDeclaratorList()
      ?.initDeclarator()
      .map((v) => v) ?? [];

  const lastDeclaredVar = nodeVars[nodeVars.length - 1];

  return createDeclaration(
    lastDeclaredVar.declarator(),
    lastDeclaredVar
      .initializer()
      ?.braceOrEqualInitializer()
      ?.initializerClause(),
    ctx.declSpecifierSeq()
  );
}

export function parseInitStatement(text: string | undefined): string {
  return text ?? KeyWords.Null;
}
