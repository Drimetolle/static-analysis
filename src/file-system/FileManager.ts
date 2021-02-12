import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { singleton } from "tsyringe";

@singleton()
export default class FileManager {
  private readonly devHomeDirectory: string;
  private readonly homeDirectory: string;
  private readonly files: Array<string>;

  constructor() {
    this.devHomeDirectory = join(__dirname, "../../test-case-files");
    this.homeDirectory = this.devHomeDirectory;
    this.files = readdirSync(this.devHomeDirectory).map(
      (f) => `${this.devHomeDirectory}\\${f}`
    );
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  *read() {
    const fileContent = readFileSync(this.files[0], "utf8");
    yield fileContent;
  }
}
