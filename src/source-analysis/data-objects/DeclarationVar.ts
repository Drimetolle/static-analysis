import { TypeSpecifier } from "./LanguageKeyWords";
import {
  AssignmentExpressionContext,
  DeclSpecifierSeqContext,
  ParameterDeclarationContext,
  SimpleDeclarationContext,
} from "../../grammar/CPP14Parser";
import { DeclarationSpecifier } from "./DeclarationSpecifier";

export default class DeclarationVar {
  readonly variableName: string;
  readonly declaration:
    | ParameterDeclarationContext
    | SimpleDeclarationContext
    | DeclSpecifierSeqContext;
  readonly expression?: AssignmentExpressionContext;
  type?: TypeSpecifier;
  private readonly specifiers: Array<DeclarationSpecifier>;

  constructor(
    variableName: string,
    declaration:
      | ParameterDeclarationContext
      | SimpleDeclarationContext
      | DeclSpecifierSeqContext,
    expression?: AssignmentExpressionContext
  ) {
    this.variableName = variableName;
    this.declaration = declaration;
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

  private toJSON(): unknown {
    return {
      name: this.variableName,
    };
  }
}
