import { CppTypes } from "../data-objects/LanguageKeyWords";

export default class MethodSignature {
  readonly name: string;
  readonly args?: Array<CppTypes>;
  readonly returnValue: CppTypes;

  constructor(name: string, args: Array<CppTypes>, returnValue: CppTypes) {
    this.name = name;
    this.args = args;
    this.returnValue = returnValue;
  }
}

export class MethodArgument {
  readonly type: CppTypes;
  private readonly ref: boolean;

  get isRef(): boolean {
    return this.ref;
  }

  constructor(type: CppTypes);
  constructor(type: CppTypes, ref: boolean);
  constructor(type: CppTypes, ref?: boolean) {
    this.type = type;
    this.ref = ref ?? false;
  }
}
