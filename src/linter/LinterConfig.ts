import { Severity } from "./issue/Severity";

export type RuleConfig = [Severity, any?];

export type RuleSchema = { [id in string]: RuleConfig };
