import { TypeSpecifier } from "../source-analysis/data-objects/LanguageKeyWords";

export enum Stereotype {
  Value,
  Struct,
  Class,
  Enum,
}

export default class Type {
  constructor(name: string, stereotype: Stereotype);
  constructor(name: string, stereotype: Stereotype, members: Array<Type>);
  constructor(name: string, stereotype: Stereotype, members?: Array<Type>) {}

  public get fullName() {
    return "";
  }

  public get IsPrimitive() {
    return false;
  }

  public get IsArray() {
    return false;
  }

  public get IsClass() {
    return false;
  }

  public get IsStruct() {
    return false;
  }

  public get IsEnum() {
    return false;
  }

  public getPrimitiveType() {
    return TypeSpecifier.INT;
  }

  public getNestedTypes(): Array<Type> {
    return [];
  }

  public toString() {
    return "";
  }
}
