import { Severity } from "./issue/Severity";

type Rule = { [id in number]: Severity };

export default interface LinterConfig {
  readonly rules: Rule;
}
