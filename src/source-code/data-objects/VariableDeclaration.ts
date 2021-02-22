import { KeyWords } from "./KeyWords";
import PositionInFile from "./PositionInFile";
import { IHavePosition } from "./DiagnosticsInterfaceses";

export enum VariableType {
  defined = "defined",
  undefined = "undefined",
}

export default class VariableDeclaration implements IHavePosition {
  position: PositionInFile;
  expression: string;
  blockId: number;
  name: string;
  type: VariableType;

  constructor(
    position: PositionInFile,
    expression: string,
    blockId: number,
    name: string
  );
  constructor(
    position: PositionInFile,
    expression: string,
    blockId: number,
    name: string,
    type: VariableType
  );
  constructor(
    position: PositionInFile,
    expression: string,
    blockId: number,
    name: string,
    type?: VariableType
  ) {
    this.position = position;
    this.expression = expression;
    this.blockId = blockId;
    this.name = name;
    this.type = type ?? VariableType.defined;
  }

  get isNull(): boolean {
    return this.expression == KeyWords.Null || this.expression == "";
  }
}
