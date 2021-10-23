import LinterContext from "./LinterContext";
import Report from "./issue/Report";

export default abstract class Rule {
  abstract run(context: LinterContext): Array<Report>;
}
