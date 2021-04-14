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
  blockId: number;
  readonly variable: Variable;
  readonly node: ParserRuleContext;

  constructor(
    position: PositionInFile,
    expression: Expression,
    blockId: number,
    variable: Variable,
    node: ParserRuleContext
  ) {
    this.position = position;
    this.expression = expression;
    this.blockId = blockId;
    this.node = node;
    this.variable = variable;
  }
}
