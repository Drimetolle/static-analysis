import "reflect-metadata";
import { container } from "tsyringe";
import Linter from "./linter/Linter";
import AllRules from "./rules";
import FileManager from "./file-system/FileManager";
import WalkersHelper from "./linter/walkers/WalkersHelper";

export default function InitContainer() {
  container.register<Linter>(Linter, {
    useValue: new Linter(AllRules, {
      rules: {},
    }),
  });
  container.register<FileManager>(FileManager, {
    useValue: new FileManager(),
  });
  container.register<WalkersHelper>(WalkersHelper, {
    useValue: new WalkersHelper(),
  });
}
