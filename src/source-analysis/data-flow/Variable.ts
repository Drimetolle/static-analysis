import { VariableState } from "../data-objects/VariableDeclaration";

export default class Variable {
  readonly name: string;
  private _state: VariableState;

  get state(): VariableState {
    return this._state;
  }

  set state(value: VariableState) {
    this._state = value;
  }

  constructor(name: string, state: VariableState) {
    this.name = name;
    this._state = state;
  }

  isDefined(): boolean {
    return this._state == VariableState.defined;
  }

  isUndefined(): boolean {
    return this._state == VariableState.undefined;
  }
}
