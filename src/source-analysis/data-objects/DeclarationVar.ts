import GrammarDerivation from "./GrammarDerivation";
import { TypeSpecifier } from "./LanguageKeyWords";

export default class DeclarationVar {
  variable: string;
  grammar: GrammarDerivation;
  type: TypeSpecifier;

  constructor(
    variable: string,
    grammar: GrammarDerivation,
    type: TypeSpecifier
  ) {
    this.variable = variable;
    this.grammar = grammar;
    this.type = type;
  }
}
