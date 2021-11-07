import { insert, last } from "ramda";
import VariableDeclaration from "../data-objects/VariableDeclaration";

export interface DeclaredVariables {
  variables: Array<VariableDeclaration>;
  getVariable(id: string): VariableDeclaration | null;
}

export default class DeclaredVariablesInScope implements DeclaredVariables {
  private readonly _variables: Map<string, Array<VariableDeclaration>>;

  get variables(): Array<VariableDeclaration> {
    return Array.from(this._variables.values()).flatMap((vars) => vars);
  }

  constructor() {
    this._variables = new Map<string, Array<VariableDeclaration>>();
  }

  getVariable(id: string): VariableDeclaration | null {
    return last(this._variables.get(id) ?? []) ?? null;
  }

  declare(variable: VariableDeclaration): void {
    this.setVariable(variable);
  }

  assign(variable: VariableDeclaration): void {
    this.assignVariable(variable);
  }

  private setVariable(variable: VariableDeclaration) {
    if (this._variables.has(variable.variableName)) {
      console.log(
        `Variable: ${variable.variableName} already declared in position: ${variable.declaration.start.line}:${variable.declaration.start.charPositionInLine}.`
      );
    }

    this.addVariable(variable);
  }

  private assignVariable(variable: VariableDeclaration) {
    this.addVariable(variable);
  }

  private addVariable(declaration: VariableDeclaration) {
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
