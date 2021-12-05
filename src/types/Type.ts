import { TypeSpecifier } from "../source-analysis/data-objects/LanguageKeyWords";

export default class Type {
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
