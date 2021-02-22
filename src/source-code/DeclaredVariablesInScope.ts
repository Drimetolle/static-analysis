import VariableDeclaration, {
  VariableType,
} from "./data-objects/VariableDeclaration";
import GrammarDerivation from "./data-objects/GrammarDerivation";
import PositionInFile from "./data-objects/PositionInFile";

export default class DeclaredVariablesInScope {
  private readonly _variables: Map<string, VariableDeclaration>;

  get variables(): Map<string, VariableDeclaration> {
    return this._variables;
  }

  constructor() {
    this._variables = new Map<string, VariableDeclaration>();
  }

  declare(
    declaration: Array<string> | string,
    expression: GrammarDerivation,
    id: PositionInFile
  ): void {
    if (typeof declaration == "string") {
      this.setVariable(declaration, expression, id);
    } else {
      declaration.forEach((d) => this.setVariable(d, expression, id));
    }
  }

  assign(
    declaration: string,
    expression: GrammarDerivation,
    id: PositionInFile
  ): void {
    if (this._variables.has(declaration)) {
      this.setVariable(declaration, expression, id);
    } else {
      this.setUndefinedVariable(declaration, expression, id);
    }
  }

  private setUndefinedVariable(
    variable: string,
    expression: GrammarDerivation,
    id: PositionInFile
  ) {
    const { line, text, start } = expression;
    const declaration = new VariableDeclaration(
      new PositionInFile(line, start),
      text,
      id.start,
      variable,
      VariableType.undefined
    );

    if (this._variables.has(variable)) {
      this._variables.delete(variable);
    }
    this._variables.set(variable, declaration);
  }

  private setVariable(
    variable: string,
    expression: GrammarDerivation,
    id: PositionInFile
  ) {
    const { line, text, start } = expression;
    const declaration = new VariableDeclaration(
      new PositionInFile(line, start),
      text,
      id.start,
      variable
    );

    if (this._variables.has(variable)) {
      this._variables.delete(variable);
    }
    this._variables.set(variable, declaration);
  }
}
