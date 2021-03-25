import LinterContext from "./LinterContext";
import { singleton, autoInjectable } from "tsyringe";
import Linter from "./Linter";

@singleton()
@autoInjectable()
export default class ProjectContext {
  private readonly contexts: Array<LinterContext>;
  private readonly linter: Linter;

  constructor();
  constructor(linter: Linter);
  constructor(linter?: Linter) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.linter = linter!;
    this.contexts = [];
  }

  create(context: LinterContext): void {
    this.contexts.push(context);
  }
}
