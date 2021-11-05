import { TypeSpecifier } from "./LanguageKeyWords";
import { AssignmentExpressionContext } from "../../grammar/CPP14Parser";

export default class DeclarationVar {
  variable: string;
  variableName: string;
  expression?: AssignmentExpressionContext;
  type: TypeSpecifier;

  constructor(
    variable: string,
    variableName: string,
    type: TypeSpecifier,
    expression?: AssignmentExpressionContext
  ) {
    this.variable = variable;
    this.variableName = variableName;
    this.expression = expression;
    this.type = type;
  }
}
