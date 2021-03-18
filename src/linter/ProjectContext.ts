import LinterContext from "./LinterContext";
import { container } from "tsyringe";
import Linter from "./Linter";

export default class ProjectContext {
  private readonly contexts: Array<LinterContext>;
  private readonly linter: Linter;

  constructor();
  constructor(contexts: Array<LinterContext>);
  constructor(contexts?: Array<LinterContext>) {
    this.linter = container.resolve(Linter);
    this.contexts = contexts ?? [];
  }

  create(context: LinterContext) {
    this.contexts.push(context);
  }
}
