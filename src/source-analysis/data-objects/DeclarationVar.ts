import { TypeSpecifier } from "./LanguageKeyWords";
import { AssignmentExpressionContext } from "../../grammar/CPP14Parser";

export default class DeclarationVar {
  variable: string;
  expression?: AssignmentExpressionContext;
  type: TypeSpecifier;

  constructor(
    variable: string,
    type: TypeSpecifier,
    expression?: AssignmentExpressionContext
  ) {
    this.variable = variable;
    this.expression = expression;
    this.type = type;
  }
}
