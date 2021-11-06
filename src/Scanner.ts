import "reflect-metadata";
import { container } from "tsyringe";
import InitContainer from "./ContainerIniter";
import Controller from "./Controller";
import FileManager from "./file-system/FileManager";
import IssuesQueue from "./linter/issue/IssuesQueue";
import Formatter, { JsonIssueScheme } from "./cli-engine/Formatter";
import dotenv from "dotenv";
import { writeFile } from "fs";
import * as console from "console";

dotenv.config({ path: ".env.local" });
InitContainer();

const controller = container.resolve(Controller);
const fileManager = new FileManager(process.env.SCAN_PATH as string);

const result = Array<JsonIssueScheme>();
const promises = Array<Promise<void>>();

container.resolve(IssuesQueue).subscribe((i) => {
  const message = Formatter.formatMessageToJson(i);
  result.push(message);
});

let totalFiles = 0;

for (const { text, path } of fileManager.readCLikeFile()) {
  promises.push(controller.runWithContent({ content: text, fileName: path }));
  totalFiles++;
}

let counterCompletedPromises = 0;

for (const promise of promises) {
  promise.then((_) => {
    counterCompletedPromises++;

    if (counterCompletedPromises == totalFiles) {
      writeFile(
        process.env.OUT_FILE as string,
        JSON.stringify(result, null, 2),
        () => console.log
      );
    }
  });
}
