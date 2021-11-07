import {
  DeclSpecifierContext,
  DeclSpecifierSeqContext,
} from "../grammar/CPP14Parser";
import {
  KeyWords,
  TypeSpecifier,
} from "../source-analysis/data-objects/LanguageKeyWords";

export function parseType(
  declaration?: DeclSpecifierSeqContext
): TypeSpecifier | undefined {
  return _parseType(declaration?.declSpecifier() ?? []);
}

export function parseFunctionReturnType(
  declaration?: DeclSpecifierSeqContext
): TypeSpecifier | undefined {
  return _parseType(declaration?.declSpecifier() ?? []);
}

function _parseType(
  declarations: Array<DeclSpecifierContext>
): TypeSpecifier | undefined {
  const rawType = declarations
    .map((d) => d.text.toUpperCase())
    .filter((d) => KeyWords[d as keyof typeof KeyWords])
    .join("_");

  return TypeSpecifier[rawType as keyof typeof TypeSpecifier] ?? undefined;
}
