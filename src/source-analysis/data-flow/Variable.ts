import { VariableState } from "../data-objects/VariableState";

export default class Variable {
  readonly variableName: string;
  private _state: VariableState;

  get state(): VariableState {
    return this._state;
  }

  set state(value: VariableState) {
    this._state = value;
  }

  constructor(variableName: string, state: VariableState) {
    this.variableName = variableName;
    this._state = state;
  }

  isDefined(): boolean {
    return this._state == VariableState.defined;
  }

  isUndefined(): boolean {
    return this._state == VariableState.undefined;
  }
}
