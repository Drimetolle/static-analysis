import { TypeSpecifier } from "./LanguageKeyWords";
import { AssignmentExpressionContext } from "../../grammar/CPP14Parser";
import { DeclarationSpecifier } from "./DeclarationSpecifier";

export default class DeclarationVar {
  readonly variable: string | null;
  readonly variableName: string;
  readonly expression?: AssignmentExpressionContext;
  readonly type: TypeSpecifier;
  private readonly specifiers: Array<DeclarationSpecifier>;

  constructor(
    variable: string | null,
    variableName: string,
    type: TypeSpecifier,
    expression?: AssignmentExpressionContext
  ) {
    this.variable = variable;
    this.variableName = variableName;
    this.expression = expression;
    this.type = type;
    this.specifiers = [];
  }

  public addSpecifier(
    ...specifier: Array<DeclarationSpecifier>
  ): DeclarationVar {
    this.specifiers.push(...specifier);
    return this;
  }
}
