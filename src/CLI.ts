import "reflect-metadata";
import { container } from "tsyringe";
import FileManager from "./file-system/FileManager";
import Linter from "./linter/Linter";
import WalkersHelper from "./linter/walkers/WalkersHelper";
import Controller from "./Controller";
import UndeclaredVariable from "./rules/UndeclaredVariable";
import IssuesQueue from "./linter/issue/IssuesQueue";

// container registration
container.register<Linter>(Linter, {
  useValue: new Linter([UndeclaredVariable], { rules: { 1: 2 } }),
});
container.register<FileManager>(FileManager, {
  useValue: new FileManager(),
});
container.register<WalkersHelper>(WalkersHelper, {
  useValue: new WalkersHelper(),
});

// container.resolve(IssuesQueue).subscribe((i) => console.log(i.toString()));

const controller = container.resolve(Controller);
controller.run();
