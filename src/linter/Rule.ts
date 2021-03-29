import LinterContext from "./LinterContext";
import Report from "./issue/Report";

export default abstract class Rule {
  readonly id: number;

  protected constructor(id: number) {
    this.id = id;
  }

  abstract run(context: LinterContext): Array<Report>;
}
