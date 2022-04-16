import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import {TypeResolverImplementation} from "../../src/types/TypeResolver";
import TypesSourceImplementation from "../../src/types/TypesSourceImplementation";
import {ValueTypeBuilder} from "../../src/types/Type";

export default function createDeclarationVisitor() {
  return new DeclarationVisitor(new TypeResolverImplementation(new TypesSourceImplementation(), new ValueTypeBuilder()));
}
