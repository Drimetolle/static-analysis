import { Type } from "./Type";
import { MemberdeclarationContext } from "../grammar/CPP14Parser";

export default interface TypeMember {
  readonly identifier: string;
  readonly type: Type;
  readonly ast: MemberdeclarationContext;
}

export class TypeMemberImplementation implements TypeMember {
  readonly identifier: string;
  readonly type: Type;
  readonly ast: MemberdeclarationContext;

  constructor(identifier: string, type: Type, ast: MemberdeclarationContext) {
    this.identifier = identifier;
    this.type = type;
    this.ast = ast;
  }
}
