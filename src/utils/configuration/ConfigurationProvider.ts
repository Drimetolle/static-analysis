import { autoInjectable, injectable, Lifecycle, scoped } from "tsyringe";
import { RuleSchema } from "../../linter/LinterConfig";
import { isSeverityString, Severity } from "../../linter/issue/Severity";
import { head } from "ramda";
import { AnalyzerRule } from "../../rules";
import { AnalyzerRuleInternal } from "../../linter/Linter";

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

      if (!rule.isValidScheme(configsByRuleName[ruleName])) {
        throw new Error(`Invalid rule scheme for rule: ${ruleName}.`);
      }

      return {
        id: analyzerRule.id,
        rule: rule,
        config: configsByRuleName[ruleName],
      };
    });
  }
}
