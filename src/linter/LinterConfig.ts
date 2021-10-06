import { Severity } from "./issue/Severity";

type Rule = { [id in string]: Severity };

export default interface LinterConfig {
  readonly rules: Rule;
}
