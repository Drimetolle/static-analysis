import { insert, last } from "ramda";
import DeclarationVar from "../data-objects/DeclarationVar";

export interface DeclaredVariables {
  variables: Array<DeclarationVar>;
  getVariable(id: string): DeclarationVar | null;
}

export default class DeclaredVariablesInScope implements DeclaredVariables {
  private readonly _variables: Map<string, Array<DeclarationVar>>;

  get variables(): Array<DeclarationVar> {
    return Array.from(this._variables.values()).flatMap((vars) => vars);
  }

  constructor() {
    this._variables = new Map<string, Array<DeclarationVar>>();
  }

  getVariable(id: string): DeclarationVar | null {
    return last(this._variables.get(id) ?? []) ?? null;
  }

  declare(variable: DeclarationVar): void {
    this.setVariable(variable);
  }

  assign(variable: DeclarationVar): void {
    this.assignVariable(variable);
  }

  private setVariable(variable: DeclarationVar) {
    if (this._variables.has(variable.variableName)) {
      console.log(
        `Variable: ${variable.variableName} already declared in position: ${variable.declaration.start.line}:${variable.declaration.start.charPositionInLine}.`
      );
    }

    this.addVariable(variable);
  }

  private assignVariable(variable: DeclarationVar) {
    this.addVariable(variable);
  }

  private addVariable(declaration: DeclarationVar) {
    this._variables.set(
      declaration.variableName,
      this._variables.get(declaration.variableName) != null
        ? insert(
            -1,
            declaration,
            this._variables.get(declaration.variableName)!
          )
        : [declaration]
    );
  }
}
