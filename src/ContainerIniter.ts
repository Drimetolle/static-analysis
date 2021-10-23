import "reflect-metadata";
import { container } from "tsyringe";
import Linter from "./linter/Linter";
import AllRules from "./rules";
import FileManager from "./file-system/FileManager";
import WalkersHelper from "./linter/walkers/WalkersHelper";
import config from "./config.json";
import { intersection } from "ramda";

export default function InitContainer() {
  const neededRulesNames = intersection(
    AllRules.map((rule) => rule.rule.name),
    Object.keys(config)
  );
  const neededRules = AllRules.filter((rule) =>
    neededRulesNames.some((name) => name === rule.rule.name)
  );

  container.register<Linter>(Linter, {
    useValue: new Linter(neededRules, {
      rules: config,
    }),
  });
  container.register<FileManager>(FileManager, {
    useValue: new FileManager(),
  });
  container.register<WalkersHelper>(WalkersHelper, {
    useValue: new WalkersHelper(),
  });
}
