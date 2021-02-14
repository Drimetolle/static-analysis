import VariableDeclaration from "./data-objects/VariableDeclaration";
import GrammarDerivation from "./data-objects/GrammarDerivation";
import PositionInFile from "./data-objects/PositionInFile";
import { CppTypes } from "./data-objects/CppTypes";

export default class DeclaredVariablesInScope {
  private readonly variables: Map<string, VariableDeclaration>;

  constructor() {
    this.variables = new Map<string, VariableDeclaration>();
  }

  declare(
    declaration: Array<string> | string,
    expression: GrammarDerivation,
    id: PositionInFile,
    type: CppTypes
  ): void {
    if (typeof declaration == "string") {
      this.setVariable(declaration, expression, id, type);
    } else {
      declaration.forEach((d) => this.setVariable(d, expression, id, type));
    }
  }

  assign(
    declaration: string,
    expression: GrammarDerivation,
    id: PositionInFile
  ): void {
    if (this.variables.has(declaration)) {
      this.setVariable(
        declaration,
        expression,
        id,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.variables.get(declaration)!.type
      );
    }
  }

  private setVariable(
    variable: string,
    expression: GrammarDerivation,
    id: PositionInFile,
    type: CppTypes
  ) {
    const { line, text, start } = expression;
    const declaration = new VariableDeclaration(
      new PositionInFile(line, start),
      text,
      id.start,
      type
    );

    if (this.variables.has(variable)) {
      this.variables.delete(variable);
    }
    this.variables.set(variable, declaration);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toObject(): any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function mapToObj(map: Map<any, unknown>) {
      const obj = {};
      for (const [k, v] of map) {
        Object.assign(obj, { [k]: v });
      }
      return obj;
    }

    return mapToObj(this.variables);
  }
}
