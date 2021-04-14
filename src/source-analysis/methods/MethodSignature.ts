import { TypeSpecifier } from "../data-objects/LanguageKeyWords";
import { clone } from "ramda";

export enum PassArguments {
  byValue,
  byPointer,
  byReference,
}

export default class MethodSignature {
  readonly name: string;
  private readonly _args?: Array<MethodArgument>;
  readonly returnValue: TypeSpecifier;

  get args(): Array<MethodArgument> {
    return clone(this._args ?? []);
  }

  constructor(
    name: string,
    args: Array<MethodArgument>,
    returnValue: TypeSpecifier
  ) {
    this.name = name;
    this._args = args;
    this.returnValue = returnValue;
  }
}

export class MethodArgument {
  readonly type: TypeSpecifier;
  private readonly value?: boolean;
  private readonly pointer?: boolean;
  private readonly reference?: boolean;
  private readonly _isConst?: boolean;

  get byValue(): boolean {
    return this.value ?? false;
  }

  get byPointer(): boolean {
    return this.pointer ?? false;
  }

  get byReference(): boolean {
    return this.reference ?? false;
  }

  get isConst(): boolean {
    return this._isConst ?? false;
  }

  constructor(
    type: TypeSpecifier,
    isConst = false,
    pointer: Array<string> = []
  ) {
    this.type = type;

    if (pointer.length == 0) {
      this.value = true;
      return;
    }
  }
}
