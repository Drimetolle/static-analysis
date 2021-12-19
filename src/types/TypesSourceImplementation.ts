﻿import { Type } from "./Type";

export interface TypesSource {
  tryRegisterType(type: Type): boolean;
  resolveType(typeName: string): Type | undefined;
}

export default class TypesSourceImplementation implements TypesSource {
  private readonly typesTable: Map<string, Type>;

  constructor() {
    this.typesTable = new Map<string, Type>();
  }

  public tryRegisterType(type: Type): boolean {
    return false;
  }

  public resolveType(typeName: string): Type | undefined {
    return;
  }
}
