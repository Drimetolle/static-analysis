import { singleton } from "tsyringe";
import VariableDeclaration from "./VariableDeclaration";
import GrammarDerivation from "./GrammarDerivation";
import PositionInFile from "./PositionInFile";

@singleton()
export default class DeclaredVariables {
  private variables: Map<string, VariableDeclaration>;

  constructor() {
    this.variables = new Map<string, VariableDeclaration>();
  }

  declare(
    declaration: Array<string> | string,
    expression: GrammarDerivation,
    id: number
  ): void {
    if (typeof declaration == "string") {
      this.setVariable(declaration, expression, id);
    } else {
      declaration.forEach((d) => this.setVariable(d, expression, id));
    }
  }

  private setVariable(
    variable: string,
    expression: GrammarDerivation,
    id: number
  ) {
    const { line, text, start } = expression;
    const declaration = new VariableDeclaration(
      new PositionInFile(line, start),
      text,
      id
    );

    if (this.variables.has(variable)) {
      this.variables.delete(variable);
    }
    this.variables.set(variable, declaration);
  }
}
