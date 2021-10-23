import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import {
  PostfixExpressionContext,
  TranslationUnitContext,
} from "../../grammar/CPP14Parser";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { isEmpty } from "ramda";

class UnsafeFunctionsHelper {
  private readonly headerFiles: any;
  private readonly functions: Set<string>;
  private readonly alternativeFunctions;

  constructor(filter: Array<string>) {
    this.headerFiles = {
      strcpy: ["string.h", "stdlib.h", "cstring", "iostream", "iomanip"],
      strncpy: ["stdlib.h", "iomanip", "iostream", "string.h"],
      strcat: ["iostream", "iomanip", "string.h", "cstring"],
      sprintf: ["stdio.h", "iostream"],
      vsprintf: ["stdio.h", "iostream", "limits", "iomanip"],
      gets: ["stdio.h", "iostream", "limits", "iomanip"],
      makepath: ["stdio.h", "iostream", "limits", "iomanip"],
      _splitpath: ["stdlib.h", "iostream", "limits", "iomanip"],
      scanf: ["stdio.h", "iostream", "limits", "iomanip"],
      sscanf: ["stdio.h", "iostream", "limits", "iomanip"],
      snscanf: ["stdio.h", "iostream", "limits", "iomanip"],
    };

    for (const kv of Object.entries(this.headerFiles)) {
      const [functionName, headers]: [string, Array<string>] = kv as any;
      if (!headers.some((header) => filter.some((name) => header === name))) {
        delete this.headerFiles[functionName];
      }
    }

    this.functions = new Set(Object.keys(this.headerFiles) as Array<string>);

    this.alternativeFunctions = new Map<string, Array<string>>([
      ["strcpy", ["strlcpy", "strcpy_s"]],
      ["strncpy", ["strlcpy", "strcpy_s"]],
      ["strcat", ["strlcat", "strcat_s", "strtok"]],
      ["sprintf", ["snprintf"]],
      ["vsprintf", ["vsnprintf"]],
      ["gets", ["fgets", "gets_s"]],
      ["makepath", ["_makepath_s"]],
      ["_splitpath", ["_splitpath_s"]],
      ["scanf", ["sscanf_s"]],
      ["sscanf", ["sscanf_s"]],
      ["snscanf", ["_snscanf_s"]],
      ["strlen", ["strnlen_s"]],
    ]);
  }

  public has(name: string | undefined) {
    if (name === undefined) {
      return false;
    }

    return this.functions.has(name);
  }

  public getAlternative(name: string | undefined): Array<string> {
    if (name === undefined) {
      return [];
    }

    return this.alternativeFunctions.get(name) ?? [];
  }
}

class FunctionCallListener implements CPP14ParserListener {
  private readonly reports;
  private readonly unsafeFunctions;

  constructor(reports: Array<Report>, unsafeFunctions: UnsafeFunctionsHelper) {
    this.reports = reports;
    this.unsafeFunctions = unsafeFunctions;
  }

  enterPostfixExpression(ctx: PostfixExpressionContext) {
    const functionName = ctx.postfixExpression()?.text;

    if (this.unsafeFunctions.has(functionName)) {
      let message = `'${functionName}' is deprecated: This function or variable may be unsafe.`;
      const alternatives = this.unsafeFunctions.getAlternative(functionName);

      if (!isEmpty(alternatives)) {
        message += ` Consider using ${alternatives
          .map((name) => `'${name}'`)
          .join(" or ")} instead.`;
      }

      this.reports.push(new Report(message, ctx));
    }
  }
}

export default class UnsafeFunctions extends Rule {
  run(context: LinterContext): Array<Report> {
    const headers: Array<string> = (
      (context.ast as TranslationUnitContext).declarationseq()?.declaration() ??
      []
    )
      .map((declaration) => declaration.includeDefinition()?.fileName()?.text!)
      .filter((text) => text !== undefined);

    const reports = new Array<Report>();
    const printer = new FunctionCallListener(
      reports,
      new UnsafeFunctionsHelper(headers)
    );
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, context.ast);

    return reports;
  }
}
