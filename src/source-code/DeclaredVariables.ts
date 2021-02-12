import { singleton } from "tsyringe";
import VariableDeclaration from "./VariableDeclaration";
import GrammarDerivation from "./GrammarDerivation";
import PositionInFile from "./PositionInFile";
import { CppTypes } from "./CppTypes";

@singleton()
export default class DeclaredVariables {
  private variables: Map<string, VariableDeclaration>;

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
      id.line,
      type
    );

    if (this.variables.has(variable)) {
      this.variables.delete(variable);
    }
    this.variables.set(variable, declaration);
  }
}
