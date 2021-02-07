import { KeyWords } from "./KeyWords";
import PositionInFile from "./PositionInFile";

export default class VariableDeclaration {
  position: PositionInFile;
  expression: string;
  blockId: number;

  constructor(position: PositionInFile, expression: string, blockId: number) {
    this.position = position;
    this.expression = expression;
    this.blockId = blockId;
  }

  get isNull(): boolean {
    return this.expression == KeyWords.Null || this.expression == "";
  }
}
