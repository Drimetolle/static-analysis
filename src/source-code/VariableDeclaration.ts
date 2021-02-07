import { KeyWords } from "./KeyWords";

export default class VariableDeclaration {
  line: number;
  expression: string;
  blockId: number;

  constructor(line: number, expression: string, blockId: number) {
    this.line = line;
    this.expression = expression;
    this.blockId = blockId;
  }

  get isNull(): boolean {
    return this.expression == KeyWords.Null || this.expression == "";
  }
}
