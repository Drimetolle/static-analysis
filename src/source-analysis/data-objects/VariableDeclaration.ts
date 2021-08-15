import PositionInFile from "./PositionInFile";
import { IHavePosition } from "./DiagnosticsInterfaceses";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import Expression from "./Expression";
import Variable from "../data-flow/Variable";

export enum VariableState {
  defined = "defined",
  undefined = "undefined",
}

export default class VariableDeclaration implements IHavePosition {
  readonly position: PositionInFile;
  expression: Expression;
  readonly variable: Variable;
  readonly node: ParserRuleContext;

  constructor(
    position: PositionInFile,
    expression: Expression,
    variable: Variable,
    node: ParserRuleContext
  ) {
    this.position = position;
    this.expression = expression;
    this.node = node;
    this.variable = variable;
  }

  public toJSON(): unknown {
    return {
      position: this.position,
      expression: this.expression.text,
      variable: this.variable,
    };
  }
}
