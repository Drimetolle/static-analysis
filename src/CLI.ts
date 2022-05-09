import "reflect-metadata";
import { container } from "tsyringe";
import Controller from "./Controller";
import IssuesQueue from "./linter/issue/IssuesQueue";
import Formatter from "./cli-engine/Formatter";
import InitContainer from "./ContainerIniter";
import config from "./config.json";

// container registration
InitContainer(config);

container
  .resolve(IssuesQueue)
  .subscribe((i) => console.log(Formatter.formatMessage(i)));

const controller = container.resolve(Controller);
controller.run();
