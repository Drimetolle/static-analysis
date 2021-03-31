import VariableDeclaration, {
  VariableState,
} from "../data-objects/VariableDeclaration";
import GrammarDerivation from "../data-objects/GrammarDerivation";
import PositionInFile from "../data-objects/PositionInFile";
import VariableAlreadyDefinedException from "../../exceptions/VariableAlreadyDefinedException";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

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
    id: PositionInFile,
    node: ParserRuleContext
  ): void {
    this.setVariable(declaration, expression, id, node);
  }

  assign(
    declaration: string,
    expression: GrammarDerivation,
    id: PositionInFile,
    node: ParserRuleContext
  ): void {
    this.assignVariable(declaration, expression, id, node);
  }

  private setVariable(
    variable: string,
    expression: GrammarDerivation,
    id: PositionInFile,
    node: ParserRuleContext
  ) {
    const declaration = DeclaredVariablesInScope.createDeclaration(
      variable,
      expression,
      id,
      VariableState.defined,
      node
    );

    if (this._variables.has(variable)) {
      const position = this._variables.get(variable)?.position.toString();
      throw new VariableAlreadyDefinedException(
        `Variable: ${variable} already declared in position: ${position}.`
      );
    }
    this._variables.set(variable, declaration);
  }

  private assignVariable(
    variable: string,
    expression: GrammarDerivation,
    id: PositionInFile,
    node: ParserRuleContext
  ) {
    if (this._variables.has(variable)) {
      const declaration = DeclaredVariablesInScope.createDeclaration(
        variable,
        expression,
        id,
        VariableState.defined,
        node
      );
      this._variables.set(variable, declaration);
    } else {
      const declaration = DeclaredVariablesInScope.createDeclaration(
        variable,
        expression,
        id,
        VariableState.undefined,
        node
      );
      this._variables.set(variable, declaration);
    }
  }

  private static createDeclaration(
    variable: string,
    expression: GrammarDerivation,
    id: PositionInFile,
    type: VariableState,
    node: ParserRuleContext
  ): VariableDeclaration {
    const { line, text, start } = expression;
    return new VariableDeclaration(
      new PositionInFile(line, start),
      text,
      id.start,
      variable,
      node,
      type
    );
  }
}
