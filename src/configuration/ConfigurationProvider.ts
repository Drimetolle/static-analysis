import { autoInjectable, injectable, Lifecycle, scoped } from "tsyringe";
import { RuleConfig, RuleSchema } from "../linter/LinterConfig";
import { isSeverityString, Severity } from "../linter/issue/Severity";
import { head } from "ramda";
import { AnalyzerRule } from "../rules";
import { AnalyzerRuleInternal } from "../linter/Linter";
import Ajv from "ajv";
import { Json } from "../linter/Rule";

@injectable()
@scoped(Lifecycle.ContainerScoped)
@autoInjectable()
export default class ConfigurationProvider {
  public parse(
    test: any,
    rules: Array<AnalyzerRule>
  ): Array<AnalyzerRuleInternal> {
    const configsByRuleName = {} as RuleSchema;

    for (const [key, config] of Object.entries(test)) {
      if (typeof config == "string" && isSeverityString(config)) {
        const severity = Severity[config];
        configsByRuleName[key] = [severity];
      } else if (Array.isArray(config)) {
        const rawSeverity = head(config);
        if (isSeverityString(rawSeverity)) {
          const severity = Severity[rawSeverity];
          configsByRuleName[key] = [severity, config[1]];
        }
      } else {
        throw new Error(`Invalid rule scheme for rule: ${key}.`);
      }
    }

    return rules.map((analyzerRule) => {
      const rule = new analyzerRule.rule();
      const ruleName = rule.constructor.name;

      const validation = ConfigurationProvider.isValidScheme(
        rule.Schema,
        configsByRuleName[ruleName]
      );

      if (!validation.valid) {
        throw new Error(
          `Invalid rule scheme for rule: ${ruleName}. Errors:\n ${JSON.stringify(
            validation.errors,
            null,
            2
          )}`
        );
      }

      return {
        id: analyzerRule.id,
        rule: rule,
        config: configsByRuleName[ruleName],
      };
    });
  }

  private static isValidScheme(schema: Json, [_, config]: RuleConfig) {
    const ajv = new Ajv();

    const validate = ajv.compile(schema);
    const valid = validate(config);

    return { valid, errors: validate.errors };
  }
}
