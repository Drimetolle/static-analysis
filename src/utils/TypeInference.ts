import {
  DeclSpecifierContext,
  DeclSpecifierSeqContext,
} from "../grammar/CPP14Parser";
import { TypeSpecifier } from "../source-analysis/data-objects/LanguageKeyWords";

export function parseType(
  declaration?: DeclSpecifierSeqContext
): TypeSpecifier {
  return _parseType(declaration?.declSpecifier().slice(0, -1) ?? []);
}

export function parseFunctionReturnType(
  declaration?: DeclSpecifierSeqContext
): TypeSpecifier {
  return _parseType(declaration?.declSpecifier() ?? []);
}

function _parseType(declarations: Array<DeclSpecifierContext>): TypeSpecifier {
  const rawType = declarations.map((d) => d.text.toUpperCase()).join("_");
  return (
    TypeSpecifier[rawType as keyof typeof TypeSpecifier] ?? TypeSpecifier.VOID
  );
}
