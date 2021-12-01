import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { stylePropertyInSchema } from "./CodeNameStyles";

/**
 * @example
  int a1aa = 3;
  int a2aa;

  void main() {
    auto *a2;
    auto &a3;
    auto a4[];
    auto *a5[];

    auto b1 = 1;
    auto *b2 = 1;
    auto &b3 = 1;
    auto b4[] = 1;
    auto *b5[] = 1;
  }
 */
export default class VariableNames extends Rule {
  constructor() {
    super();
    this.Schema = {
      type: "object",
      properties: {
        ...stylePropertyInSchema,
      },
    };
  }

  isCamelCase(str: string) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(str);
  }

  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();

    const allLocalVariables = context.scope.getRoot.children.flatMap(
      (children) => context.scope.toArray(children)
    );

    for (const node of allLocalVariables) {
      for (const variable of node.data.declaredVariables.variables) {
        if (!this.isCamelCase(variable.variableName)) {
          reports.push(
            new Report(
              `Identifier '${variable.variableName}' is not in camel case.`,
              variable.declaration
            )
          );
        }
      }
    }
    return reports;
  }
}
