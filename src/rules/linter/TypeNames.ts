import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ClassNameContext } from "../../grammar/CPP14Parser";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

class TypeListener implements CPP14ParserListener {
  private readonly names;

  constructor(names: Array<ClassNameContext>) {
    this.names = names;
  }

  enterClassName(ctx: ClassNameContext) {
    this.names.push(ctx);
  }
}

export default class TypeNames extends Rule {
  private static isPascalCase(str: string): boolean {
    return true;
    // return /^[A-Z0-9][a-z0-9]+(?:[A-Z0-9][a-z0-9]+)*$/.test(str);
  }

  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();

    const names = new Array<ClassNameContext>();
    const printer = new TypeListener(names);
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, context.ast);
    for (const className of names) {
      if (!TypeNames.isPascalCase(className.text)) {
        reports.push(
          new Report(
            `Class name '${className.text}' is not in pascal case.`,
            className
          )
        );
      }
    }

    return reports;
  }
}
