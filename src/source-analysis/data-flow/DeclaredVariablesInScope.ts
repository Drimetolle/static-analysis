import VariableDeclaration, {
  VariableState,
} from "../data-objects/VariableDeclaration";
import PositionInFile from "../data-objects/PositionInFile";
import VariableAlreadyDefinedException from "../../exceptions/VariableAlreadyDefinedException";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import Expression from "../data-objects/Expression";
import Variable from "./Variable";
import { insert, last } from "ramda";
import { TypeSpecifier } from "../data-objects/LanguageKeyWords";

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

  declare(
    declaration: string,
    expression: Expression,
    id: PositionInFile,
    node: ParserRuleContext,
    type: TypeSpecifier = TypeSpecifier.AUTO
  ): void {
    this.setVariable(declaration, expression, id, node, type);
  }

  assign(
    declaration: string,
    expression: Expression,
    id: PositionInFile,
    node: ParserRuleContext,
    type: TypeSpecifier = TypeSpecifier.AUTO
  ): void {
    this.assignVariable(declaration, expression, id, node, type);
  }

  private setVariable(
    variable: string,
    expression: Expression,
    id: PositionInFile,
    node: ParserRuleContext,
    type: TypeSpecifier
  ) {
    const declaration = DeclaredVariablesInScope.createDeclaration(
      variable,
      expression,
      id,
      VariableState.defined,
      node,
      type
    );

    if (this._variables.has(variable)) {
      const position = this._variables
        .get(variable)
        ?.find((v) => v.variable.name == variable)
        ?.position.toString();
      throw new VariableAlreadyDefinedException(
        `Variable: ${variable} already declared in position: ${position}.`
      );
    }

    this.addVariable(variable, declaration);
  }

  private assignVariable(
    variable: string,
    expression: Expression,
    id: PositionInFile,
    node: ParserRuleContext,
    type: TypeSpecifier
  ) {
    if (this._variables.has(variable)) {
      const declaration = DeclaredVariablesInScope.createDeclaration(
        variable,
        expression,
        id,
        VariableState.defined,
        node,
        type
      );

      this.addVariable(variable, declaration);
    } else {
      const declaration = DeclaredVariablesInScope.createDeclaration(
        variable,
        expression,
        id,
        VariableState.undefined,
        node,
        type
      );

      this.addVariable(variable, declaration);
    }
  }

  private addVariable(variable: string, declaration: VariableDeclaration) {
    this._variables.set(
      variable,
      this._variables.get(variable) != null
        ? insert(-1, declaration, this._variables.get(variable)!)
        : [declaration]
    );
  }

  private static createDeclaration(
    variable: string,
    expression: Expression,
    id: PositionInFile,
    state: VariableState,
    node: ParserRuleContext,
    type: TypeSpecifier
  ): VariableDeclaration {
    return new VariableDeclaration(
      id,
      expression,
      new Variable(variable, state),
      node,
      type
    );
  }
}
