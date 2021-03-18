export default class GrammarDerivation {
  start: number;
  stop: number;
  line: number;
  text: string;

  constructor(start: number, stop: number, line: number, text: string) {
    this.start = start;
    this.stop = stop;
    this.line = line;
    this.text = text;
  }
}
