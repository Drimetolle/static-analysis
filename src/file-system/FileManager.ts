import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { singleton } from "tsyringe";

@singleton()
export default class FileManager {
  private readonly homeDirectory: string;
  private readonly files: Array<string>;

  constructor();
  constructor(homeDirectory: string);
  constructor(homeDirectory?: string) {
    this.homeDirectory =
      homeDirectory ?? join(__dirname, "../../test-case-files");
    this.files = readdirSync(this.homeDirectory).map(
      (f) => `${this.homeDirectory}\\${f}`
    );
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  *read() {
    const fileContent = readFileSync(this.files[0], "utf8");
    yield fileContent;
  }
}
