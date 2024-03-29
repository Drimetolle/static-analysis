﻿import Rule from "../../linter/Rule";
import Report from "../../linter/issue/Report";
import LinterContext from "../../linter/LinterContext";
import { TypeSpecifier } from "../../source-analysis/data-objects/LanguageKeyWords";
import { isCppFile } from "../../utils/Utils";
import { DeclaratorSpecifier } from "../../source-analysis/data-objects/DeclaratorSpecifier";

/**
 * This function does something see example below:
 * @example
  void main() {
   // Bad
   char* str = "Hello there";
   char* str1;
   // Good
   string str3 = "Hello there";
   string str4;
  }
 */
export default class StringInCStyle extends Rule {
  run(context: LinterContext): Array<Report> {
    if (!isCppFile(context.fileName)) {
      return [];
    }

    const a = context.scope
      .toArray()
      .flatMap((_) => _.data.declaredVariables.variables)
      .filter((variable) => {
        return (
          variable.type == TypeSpecifier.CHAR &&
          variable.declarators.has(DeclaratorSpecifier.Pointer)
        );
      });

    return a.map(
      (variable) =>
        new Report("C style text string. Use 'string'", variable.declaration)
    );
  }
}
