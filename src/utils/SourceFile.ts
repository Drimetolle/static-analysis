export default class SourceFile {
  path: string;
  text: string;

  constructor(path: string, text: string) {
    this.path = path;
    this.text = text;
  }
}
