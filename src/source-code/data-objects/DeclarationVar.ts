import GrammarDerivation from "./GrammarDerivation";
import { CppTypes } from "./LanguageKeyWords";

export default class DeclarationVar {
  variable: string;
  grammar: GrammarDerivation;
  type: CppTypes;

  constructor(variable: string, grammar: GrammarDerivation, type: CppTypes) {
    this.variable = variable;
    this.grammar = grammar;
    this.type = type;
  }
}
