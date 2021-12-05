import { TypeSpecifier } from "../source-analysis/data-objects/LanguageKeyWords";
import { SimpleDeclarationContext } from "../grammar/CPP14Parser";
import { clone } from "ramda";
import { DeclarationSpecifier } from "../source-analysis/data-objects/DeclarationSpecifier";
import { DeclaratorSpecifier } from "../source-analysis/data-objects/DeclaratorSpecifier";
import { parseSimpleType } from "./TypeInference";

export enum Stereotype {
  Value,
  Struct,
  Class,
  Enum,
}

export interface Specifiers {
  readonly declarationSpecifier: Array<DeclarationSpecifier>;
  readonly declaratorSpecifier: Array<DeclaratorSpecifier>;
}

interface InternalSpecifiers {
  readonly declarationSpecifier: Set<DeclarationSpecifier>;
  readonly declaratorSpecifier: Set<DeclaratorSpecifier>;
}

export default class TypeBuilder {
  public createClassType(declaration: SimpleDeclarationContext): Type {
    return new InternalType(Stereotype.Class, null as any, []);
  }

  public createStructType(declaration: SimpleDeclarationContext): Type {
    return new InternalType(Stereotype.Struct, null as any, []);
  }

  public createEnumType(declaration: SimpleDeclarationContext): Type {
    return new InternalType(Stereotype.Enum, null as any, []);
  }

  public createValueType(declaration: SimpleDeclarationContext): Type {
    const simpleType = parseSimpleType(declaration.declSpecifierSeq());

    if (!simpleType) {
      throw new Error(`Can't create type for ${declaration.text}`);
    }

    return new InternalType(Stereotype.Value, null as any, []).setFullName(
      simpleType,
      []
    );
  }

  public createArrayType(
    declaration: SimpleDeclarationContext,
    length?: number
  ): Type {
    return new InternalType(Stereotype.Value, null as any, []);
  }
}

export interface Type {
  fullName: string;
  IsPrimitive: boolean;
  IsEnumerable: boolean;
  IsClass: boolean;
  IsStruct: boolean;
  IsEnum: boolean;

  getPrimitiveType(): TypeSpecifier;

  getNestedTypes(): Array<Type>;
}

class InternalType implements Type {
  private primitiveType?: TypeSpecifier;
  private readonly stereotype: Stereotype;
  private readonly members: Array<InternalType>;
  private readonly specifiers: InternalSpecifiers;

  constructor(stereotype: Stereotype, specifiers: Specifiers);
  constructor(
    stereotype: Stereotype,
    specifiers: Specifiers,
    members: Array<InternalType>
  );
  constructor(
    stereotype: Stereotype,
    specifiers: Specifiers,
    members?: Array<InternalType>
  ) {
    this.stereotype = stereotype;
    this.members = members ?? [];

    this.specifiers = {
      declarationSpecifier: new Set<DeclarationSpecifier>(
        specifiers.declarationSpecifier
      ),
      declaratorSpecifier: new Set<DeclaratorSpecifier>(
        specifiers.declaratorSpecifier
      ),
    };

    switch (stereotype) {
      case Stereotype.Value:
        break;
      case Stereotype.Struct:
        break;
      case Stereotype.Class:
        break;
      case Stereotype.Enum:
        break;
    }
  }

  public get fullName() {
    return "";
  }

  public get IsPrimitive() {
    return this.stereotype == Stereotype.Value;
  }

  public get IsEnumerable() {
    return this.specifiers.declaratorSpecifier.has(DeclaratorSpecifier.Pointer);
  }

  public get IsClass() {
    return this.stereotype == Stereotype.Class;
  }

  public get IsStruct() {
    return this.stereotype == Stereotype.Struct;
  }

  public get IsEnum() {
    return this.stereotype == Stereotype.Enum;
  }

  public getPrimitiveType() {
    return TypeSpecifier.INT;
  }

  public getNestedTypes(): Array<Type> {
    return clone(this.members);
  }

  public toString() {
    return "";
  }

  public setFullName(typeId: string, nameSpaces: Array<string>) {
    return this;
  }
}
