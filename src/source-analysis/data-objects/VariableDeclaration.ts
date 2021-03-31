import PositionInFile from "./PositionInFile";
import { IHavePosition } from "./DiagnosticsInterfaceses";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export enum VariableState {
  defined = "defined",
  undefined = "undefined",
}

export default class VariableDeclaration implements IHavePosition {
  position: PositionInFile;
  expression?: string;
  blockId: number;
  name: string;
  state: VariableState;
  node: ParserRuleContext;

  constructor(
    position: PositionInFile,
    expression: string,
    blockId: number,
    name: string,
    node: ParserRuleContext
  );
  constructor(
    position: PositionInFile,
    expression: string,
    blockId: number,
    name: string,
    node: ParserRuleContext,
    type: VariableState
  );
  constructor(
    position: PositionInFile,
    expression: string,
    blockId: number,
    name: string,
    node: ParserRuleContext,
    type?: VariableState
  ) {
    this.position = position;
    this.expression = expression;
    this.blockId = blockId;
    this.name = name;
    this.state = type ?? VariableState.defined;
    this.node = node;
  }
}
