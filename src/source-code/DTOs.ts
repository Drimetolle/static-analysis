import GrammarDerivation from "./GrammarDerivation";
import { CppTypes } from "./CppTypes";

export interface DeclarationVar {
  variable: string | Array<string>;
  grammar: GrammarDerivation;
  id: string;
  type: CppTypes;
}
