import { Information, Walker } from "./Walker";
import { TranslationUnitContext } from "../../grammar/CPP14Parser";
import { autoInjectable } from "tsyringe";
import ProjectContext from "../ProjectContext";
import Controller from "../../Controller";

@autoInjectable()
export default class WalkersHelper {
  private projectContext: ProjectContext;
  private controller: Controller;

  constructor();
  constructor(projectContext?: ProjectContext, controller?: Controller) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.projectContext = projectContext!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.controller = controller!;
  }

  async analyze(
    walker: Walker,
    ast: TranslationUnitContext
  ): Promise<Information> {
    return await walker.start(ast);
  }
}
