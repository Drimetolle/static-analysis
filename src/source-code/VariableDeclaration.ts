import { KeyWords } from "./KeyWords";
import PositionInFile from "./PositionInFile";
import { CppTypes } from "./CppTypes";

export default class VariableDeclaration {
  position: PositionInFile;
  expression: string;
  blockId: number;
  type: CppTypes;

  constructor(
    position: PositionInFile,
    expression: string,
    blockId: number,
    type: CppTypes
  ) {
    this.position = position;
    this.expression = expression;
    this.blockId = blockId;
    this.type = type;
  }

  get isNull(): boolean {
    return this.expression == KeyWords.Null || this.expression == "";
  }
}
