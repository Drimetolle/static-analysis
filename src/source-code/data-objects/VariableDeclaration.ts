import PositionInFile from "./PositionInFile";
import { IHavePosition } from "./DiagnosticsInterfaceses";
import { KeyWords } from "./LanguageKeyWords";

export enum VariableState {
  defined = "defined",
  undefined = "undefined",
}

export default class VariableDeclaration implements IHavePosition {
  position: PositionInFile;
  expression: string;
  blockId: number;
  name: string;
  state: VariableState;

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
    type: VariableState
  );
  constructor(
    position: PositionInFile,
    expression: string,
    blockId: number,
    name: string,
    type?: VariableState
  ) {
    this.position = position;
    this.expression = expression;
    this.blockId = blockId;
    this.name = name;
    this.state = type ?? VariableState.defined;
  }

  get isNull(): boolean {
    return this.expression == KeyWords.Null || this.expression == "";
  }
}
