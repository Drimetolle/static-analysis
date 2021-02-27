import {
  DeclSpecifierContext,
  DeclSpecifierSeqContext,
} from "../grammar/CPP14Parser";
import { TypeSpecifier } from "../source-code/data-objects/LanguageKeyWords";

export function parseSingleType(
  declaration?: DeclSpecifierSeqContext
): TypeSpecifier {
  return parseType(declaration?.declSpecifier().slice().slice(0, -1) ?? []);
}

export function parseTypeFunction(
  declaration?: DeclSpecifierSeqContext
): TypeSpecifier {
  return parseType(declaration?.declSpecifier() ?? []);
}

function parseType(declarations: Array<DeclSpecifierContext>): TypeSpecifier {
  const rawType =
    declarations.map((d) => d.text.toUpperCase()).join("_") ??
    TypeSpecifier.VOID;
  return (
    TypeSpecifier[rawType as keyof typeof TypeSpecifier] ?? TypeSpecifier.VOID
  );
}
