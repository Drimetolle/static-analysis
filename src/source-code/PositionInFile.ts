export default class PositionInFile {
  line: number;
  start: number;

  constructor(line: number, start: number) {
    this.line = line;
    this.start = start;
  }

  toString(): string {
    return `${this.line}:${this.start}`;
  }
}
