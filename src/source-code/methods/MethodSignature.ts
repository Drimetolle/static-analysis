import { TypeSpecifier } from "../data-objects/LanguageKeyWords";

export default class MethodSignature {
  readonly name: string;
  readonly args?: Array<TypeSpecifier>;
  readonly returnValue: TypeSpecifier;

  constructor(
    name: string,
    args: Array<TypeSpecifier>,
    returnValue: TypeSpecifier
  ) {
    this.name = name;
    this.args = args;
    this.returnValue = returnValue;
  }
}

export class MethodArgument {
  readonly type: TypeSpecifier;
  private readonly ref: boolean;

  get isRef(): boolean {
    return this.ref;
  }

  constructor(type: TypeSpecifier);
  constructor(type: TypeSpecifier, ref: boolean);
  constructor(type: TypeSpecifier, ref?: boolean) {
    this.type = type;
    this.ref = ref ?? false;
  }
}
