import { inject, injectable } from "tsyringe";
import { TypesSource } from "./TypesSourceImplementation";
import { DeclSpecifierSeqContext } from "../grammar/CPP14Parser";
import { parseSimpleType } from "./TypeInference";
import { Type, ValueTypeBuilder } from "./Type";

export default interface TypeResolver {
  getType(declaration: DeclSpecifierSeqContext): Type | undefined;
}

@injectable()
export class TypeResolverImplementation implements TypeResolver {
  constructor(
    @inject("TypesSource") private typesSource: TypesSource,
    private valueTypeBuilder: ValueTypeBuilder
  ) {}

  getType(declaration: DeclSpecifierSeqContext): Type | undefined {
    const simpleType = parseSimpleType(declaration);

    if (simpleType) {
      return this.valueTypeBuilder.createValueType(declaration);
    }

    const type = this.typesSource.resolveType(declaration.text);

    if (!type) {
      console.log(`Unknown type <${declaration.text}>`)
      // throw new Error(`Unknown type <${declaration.text}>`);
    }

    return type;
  }
}
