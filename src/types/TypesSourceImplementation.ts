import { Type } from "./Type";

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
    if (!this.typesTable.has(type.fullName)) {
      this.typesTable.set(type.fullName, type);

      return true;
    }
    return false;
  }

  public resolveType(typeName: string): Type | undefined {
    const type = this.typesTable.get(typeName);

    if (type) {
      return type;
    }

    const aliases = Array.from(this.typesTable, ([key, { aliases }]) => ({
      key,
      aliases,
    }));

    for (const alias of aliases) {
      if (alias.aliases.indexOf(typeName) >= 0) {
        return this.typesTable.get(alias.key);
      }
    }
  }
}
