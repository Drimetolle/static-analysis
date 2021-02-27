import { DeclSpecifierContext } from "../grammar/CPP14Parser";
import { CppTypes } from "../source-code/data-objects/LanguageKeyWords";

export function parseSingleType(declaration?: DeclSpecifierContext): CppTypes {
  const rawType = declaration?.text.toUpperCase() ?? CppTypes.VOID;
  return CppTypes[rawType as keyof typeof CppTypes] ?? CppTypes.VOID;
}
