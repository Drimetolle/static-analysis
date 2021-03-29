import VariableDeclaration, {
  VariableState,
} from "../data-objects/VariableDeclaration";
import GrammarDerivation from "../data-objects/GrammarDerivation";
import PositionInFile from "../data-objects/PositionInFile";

export default class DeclaredVariablesInScope {
  private readonly _variables: Map<string, VariableDeclaration>;

  get variables(): Map<string, VariableDeclaration> {
    return this._variables;
  }

  constructor() {
    this._variables = new Map<string, VariableDeclaration>();
  }

  declare(
    declaration: string,
    expression: GrammarDerivation,
    id: PositionInFile
  ): void {
    this.setVariable(declaration, expression, id);
  }

  assign(
    declaration: string,
    expression: GrammarDerivation,
    id: PositionInFile
  ): void {
    this.assignVariable(declaration, expression, id);
  }

  private setVariable(
    variable: string,
    expression: GrammarDerivation,
    id: PositionInFile
  ) {
    const declaration = DeclaredVariablesInScope.createDeclaration(
      variable,
      expression,
      id,
      VariableState.defined
    );

    if (this._variables.has(variable)) {
      // TODO
      throw new Error("Variable already declared.");
    }
    this._variables.set(variable, declaration);
  }

  private assignVariable(
    variable: string,
    expression: GrammarDerivation,
    id: PositionInFile
  ) {
    if (this._variables.has(variable)) {
      const declaration = DeclaredVariablesInScope.createDeclaration(
        variable,
        expression,
        id,
        VariableState.defined
      );
      this._variables.set(variable, declaration);
    } else {
      const declaration = DeclaredVariablesInScope.createDeclaration(
        variable,
        expression,
        id,
        VariableState.undefined
      );
      this._variables.set(variable, declaration);
    }
  }

  private static createDeclaration(
    variable: string,
    expression: GrammarDerivation,
    id: PositionInFile,
    type: VariableState
  ): VariableDeclaration {
    const { line, text, start } = expression;
    return new VariableDeclaration(
      new PositionInFile(line, start),
      text,
      id.start,
      variable,
      type
    );
  }
}
