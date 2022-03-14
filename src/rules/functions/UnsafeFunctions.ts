import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { PostfixExpressionContext } from "../../grammar/CPP14Parser";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { isEmpty } from "ramda";

class UnsafeFunctionsHelper {
  private readonly alternativeFunctions;

  constructor(functions: Map<string, Array<string>>) {
    this.alternativeFunctions = functions;
  }

  public has(name: string | undefined) {
    if (name === undefined) {
      return false;
    }

    return this.alternativeFunctions.has(name);
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
      let message = `'${functionName}' is deprecated: This function may be unsafe.`;
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
  constructor() {
    super();
    this.Schema = {
      type: "object",
    };
  }

  run(context: LinterContext): Array<Report> {
    const config = context.getConfig<any>();
    const functions = new Map<string, Array<string>>(Object.entries(config));

    const reports = new Array<Report>();
    const printer = new FunctionCallListener(
      reports,
      new UnsafeFunctionsHelper(functions)
    );
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, context.ast);

    return reports;
  }
}
