import { TypeSpecifier } from "./LanguageKeyWords";
import {
  AssignmentExpressionContext,
  DeclSpecifierSeqContext,
  ParameterDeclarationContext,
  SimpleDeclarationContext,
} from "../../grammar/CPP14Parser";
import { DeclarationSpecifier } from "./DeclarationSpecifier";
import { clone } from "ramda";
import { DeclaratorSpecifier } from "./DeclaratorSpecifier";

export default class VariableDeclaration {
  readonly variableName: string;
  readonly declaration:
    | ParameterDeclarationContext
    | SimpleDeclarationContext
    | DeclSpecifierSeqContext;
  readonly expression?: AssignmentExpressionContext;
  type?: TypeSpecifier;
  private readonly _specifiers: Array<DeclarationSpecifier>;
  private readonly _declarators: Array<DeclaratorSpecifier>;

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
    this._specifiers = [];
    this._declarators = [];
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
  ): VariableDeclaration {
    this._specifiers.push(...specifier);
    return this;
  }

  public addDeclarator(
    ...declarators: Array<DeclaratorSpecifier>
  ): VariableDeclaration {
    this._declarators.push(...declarators);
    return this;
  }

  get specifiers(): Set<DeclarationSpecifier> {
    return new Set<DeclarationSpecifier>(clone(this._specifiers));
  }

  get declarators(): Set<DeclaratorSpecifier> {
    return new Set<DeclaratorSpecifier>(clone(this._declarators));
  }

  private toJSON(): unknown {
    return {
      name: this.variableName,
    };
  }
}
