import DeclaredVariablesInScope from "../data-flow/DeclaredVariablesInScope";

export default class CodeBlock {
  declaredVariables: DeclaredVariablesInScope;

  constructor();
  constructor(declaredVariables: DeclaredVariablesInScope);
  constructor(declaredVariables?: DeclaredVariablesInScope) {
    this.declaredVariables =
      declaredVariables ?? new DeclaredVariablesInScope();
  }
}
