import { singleton } from "tsyringe";
import VariableDeclaration from "./VariableDeclaration";
import GrammarDerivation from "./GrammarDerivation";

@singleton()
export default class DeclaredVariables {
  private variables: Map<string, VariableDeclaration>;

  constructor() {
    this.variables = new Map<string, VariableDeclaration>();
  }

  declare(
    variable: GrammarDerivation,
    expression: GrammarDerivation,
    id: number
  ): void {
    const { line, text } = expression;
    const declaration = new VariableDeclaration(line, text, id);

    if (this.variables.has(variable.text)) {
      this.variables.delete(variable.text);
    }
    this.variables.set(variable.text, declaration);
  }
}
