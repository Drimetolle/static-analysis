import VariableDeclaration, {
  VariableState,
} from "../data-objects/VariableDeclaration";
import PositionInFile from "../data-objects/PositionInFile";
import VariableAlreadyDefinedException from "../../exceptions/VariableAlreadyDefinedException";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import Expression from "../data-objects/Expression";
import Variable from "./Variable";

export interface DeclaredVariables {
  variables: Array<VariableDeclaration>;
  getVariable(id: string): VariableDeclaration | null;
}

export default class DeclaredVariablesInScope implements DeclaredVariables {
  private readonly _variables: Map<string, VariableDeclaration>;

  get variables(): Array<VariableDeclaration> {
    return Array.from(this._variables.values());
  }

  constructor() {
    this._variables = new Map<string, VariableDeclaration>();
  }

  getVariable(id: string): VariableDeclaration | null {
    return this._variables.get(id) ?? null;
  }

  declare(
    declaration: string,
    expression: Expression,
    id: PositionInFile,
    node: ParserRuleContext
  ): void {
    this.setVariable(declaration, expression, id, node);
  }

  assign(
    declaration: string,
    expression: Expression,
    id: PositionInFile,
    node: ParserRuleContext
  ): void {
    this.assignVariable(declaration, expression, id, node);
  }

  private setVariable(
    variable: string,
    expression: Expression,
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
    expression: Expression,
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
    expression: Expression,
    id: PositionInFile,
    type: VariableState,
    node: ParserRuleContext
  ): VariableDeclaration {
    return new VariableDeclaration(
      id,
      expression,
      new Variable(variable, type),
      node
    );
  }
}
