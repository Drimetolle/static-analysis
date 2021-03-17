import {
  DeclaratorContext,
  DeclSpecifierSeqContext,
  InitializerClauseContext,
  SimpleDeclarationContext,
} from "../grammar/CPP14Parser";
import DeclarationVar from "../source-code/data-objects/DeclarationVar";
import { TypeSpecifier } from "../source-code/data-objects/LanguageKeyWords";
import GrammarDerivation from "../source-code/data-objects/GrammarDerivation";
import { parseTypeFunction } from "../utils/TypeInference";
import defaultValueByType from "../utils/DefaultValues";

export function createDeclaration(
  dec: DeclaratorContext,
  init?: InitializerClauseContext,
  decSeq?: DeclSpecifierSeqContext
): DeclarationVar {
  const type = parseTypeFunction(decSeq);
  const initInner = parseInitStatement(init?.text, type);

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
): Array<DeclarationVar> {
  const nodeVars =
    ctx
      .initDeclaratorList()
      ?.initDeclarator()
      .map((v) => v) ?? [];

  return nodeVars.map((node) =>
    createDeclaration(
      node.declarator(),
      node.initializer()?.braceOrEqualInitializer()?.initializerClause(),
      ctx.declSpecifierSeq()
    )
  );
}

export function parseInitStatement(
  text: string | undefined,
  type: TypeSpecifier
): string {
  return text ?? defaultValueByType(type);
}
