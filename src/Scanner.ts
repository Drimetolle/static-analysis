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
import cliProgress from "cli-progress";
import config from "./config.json";

interface JsonReport {
  totalIssue: number;
  totalErrors: number;
  totalWarnings: number;
  totalStyle: number;
  issues: Array<JsonIssueScheme>;
}

dotenv.config({ path: ".env.local" });
const singleBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);
InitContainer(config);

const controller = container.resolve(Controller);
const fileManager = new FileManager(process.env.SCAN_PATH as string);

const issues = Array<JsonIssueScheme>();
const promises = Array<{ path: string; promise: Promise<void> }>();

container.resolve(IssuesQueue).subscribe((i) => {
  const message = Formatter.formatMessageToJson(i);
  issues.push(message);
  console.log(Formatter.formatMessage(i));
});

let competedFiles = 0;
const totalFiles = fileManager.cLikeFileCount();
console.log("Analyzing files");
singleBar.start(totalFiles, competedFiles);

for (const { text, path } of fileManager.readCLikeFile()) {
  promises.push({
    path,
    promise: controller.runWithContent({ content: text, fileName: path }),
  });
  competedFiles++;

  singleBar.update(competedFiles);
}

let counterCompletedPromises = 0;

for (const { path, promise } of promises) {
  promise
    .then((_) => {
      counterCompletedPromises++;

      if (counterCompletedPromises == competedFiles) {
        singleBar.stop();
        const result: JsonReport = {
          totalIssue: issues.length,
          totalErrors: issues.filter((issue) => issue.level == "Error").length,
          totalWarnings: issues.filter((issue) => issue.level == "Warning")
            .length,
          totalStyle: issues.filter((issue) => issue.level == "Information")
            .length,
          issues,
        };
        writeFile(
          process.env.OUT_FILE as string,
          JSON.stringify(result, null, 2),
          () => console.log
        );
      }
    })
    .catch((error) => {
      console.error(`Error in file: ${path}`, error);
    });
}
