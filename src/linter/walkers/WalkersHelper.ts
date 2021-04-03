import { Walker } from "./Walker";
import { autoInjectable } from "tsyringe";
import ProjectContext from "../ProjectContext";
import Controller from "../../Controller";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

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

  async analyze<T>(walker: Walker<T>, ast: ParserRuleContext): Promise<T> {
    return await walker.start(ast);
  }
}
