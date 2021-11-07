import { TypeSpecifier } from "./LanguageKeyWords";
import { AssignmentExpressionContext } from "../../grammar/CPP14Parser";
import { DeclarationSpecifier } from "./DeclarationSpecifier";

export default class DeclarationVar {
  readonly variable: string | null;
  readonly variableName: string;
  readonly expression?: AssignmentExpressionContext;
  type?: TypeSpecifier;
  private readonly specifiers: Array<DeclarationSpecifier>;

  constructor(
    variable: string | null,
    variableName: string,
    expression?: AssignmentExpressionContext
  ) {
    this.variable = variable;
    this.variableName = variableName;
    this.expression = expression;
    this.specifiers = [];
  }

  public trySetSimpleType(type?: TypeSpecifier) {
    if (type) {
      return this.setSimpleType(type);
    }

    return this;
  }

  public setSimpleType(type: TypeSpecifier) {
    this.type = type;
    return this;
  }

  public addSpecifier(
    ...specifier: Array<DeclarationSpecifier>
  ): DeclarationVar {
    this.specifiers.push(...specifier);
    return this;
  }
}
