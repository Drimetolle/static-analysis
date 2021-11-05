import { readFileSync, readdirSync, readdir, readFile } from "fs";
import { promisify } from "util";
import { join } from "path";
import { singleton } from "tsyringe";
import SourceFile from "../utils/SourceFile";

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);

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

  public async findFile(name: string): Promise<string> {
    const result = await this.fromDir(this.homeDirectory, name);
    if (result) {
      return await readFileAsync(result, "utf8");
    }

    return "";
  }

  private async fromDir(
    startDirectory: string,
    name: string
  ): Promise<string | null> {
    const directs = (
      await readdirAsync(startDirectory, {
        withFileTypes: true,
      })
    ).map((f) => f);

    const fileName = join(startDirectory, name);

    const files = directs
      .filter((d) => d.isFile())
      .map((f) => join(startDirectory, f.name));
    const directories = directs
      .filter((d) => d.isDirectory())
      .map((dir) => join(startDirectory, dir.name));

    if (files.indexOf(fileName) >= 0) {
      return fileName;
    }

    for (const dir of directories) {
      const result = await this.fromDir(dir, name);

      if (result) {
        return result;
      }
    }

    return null;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public *read() {
    const fileContent = readFileSync(this.files[0], "utf8");
    yield new SourceFile(this.files[0], fileContent);
  }

  public *readTmp() {
    for (const file of this.files) {
      const fileContent = readFileSync(file, "utf8");
      yield new SourceFile(file, fileContent);
    }
  }
}
