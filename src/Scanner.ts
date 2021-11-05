import "reflect-metadata";
import { container } from "tsyringe";
import InitContainer from "./ContainerIniter";
import Controller from "./Controller";
import FileManager from "./file-system/FileManager";
import IssuesQueue from "./linter/issue/IssuesQueue";
import Formatter from "./cli-engine/Formatter";
import dotenv from "dotenv";
import { appendFile } from "fs";
import * as console from "console";

dotenv.config({ path: ".env.local" });
InitContainer();

const controller = container.resolve(Controller);
const fileManager = new FileManager(process.env.SCAN_PATH as string);

const result = new Map<string, Array<string>>();

container.resolve(IssuesQueue).subscribe((i) => {
  const message = Formatter.formatMessage(i);
  if (result.has(i.fileName)) {
    result.get(i.fileName)?.push(message);
  } else {
    result.set(i.fileName, []);
  }
  appendFile(process.env.OUT_FILE as string, message, () => console.log);
});

for (const { text, path } of fileManager.readTmp()) {
  controller.runWithContent({ content: text, fileName: path });
}
