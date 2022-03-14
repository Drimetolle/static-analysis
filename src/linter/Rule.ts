import LinterContext from "./LinterContext";
import Report from "./issue/Report";

export interface Json {
  [key: string]: Json | string | Array<unknown> | number | boolean;
}

export default abstract class Rule {
  public Schema: Json = {};
  abstract run(context: LinterContext): Array<Report>;
}
