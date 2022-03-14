import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import {
  ClassHeadContext,
  ClassHeadNameContext,
} from "../../grammar/CPP14Parser";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import DefaultCodeStyleConfig from "./DefaultCodeStyleConfig";
import CodeStyleStrategy, { stylePropertyInSchema } from "./CodeStyleStrategy";

class TypeListener implements CPP14ParserListener {
  private readonly names;

  constructor(names: Array<ClassHeadNameContext>) {
    this.names = names;
  }

  enterClassHead(ctx: ClassHeadContext) {
    const className = ctx.classHeadName();
    if (className instanceof ClassHeadNameContext) {
      this.names.push(className);
    }
  }
}

/**
 * @example
 class Vector;
 class Matrix {

  };
 class Vector {

  };

 struct MyStruct {

  };

 namespace ns {
     class VectorInNamespace {};
  }

 template <typename T>
 struct identity
 {
      using type = T;
  };
 */
export default class TypeNames extends Rule {
  constructor() {
    super();
    this.Schema = {
      type: "object",
      properties: {
        ...stylePropertyInSchema,
      },
    };
  }

  run(context: LinterContext): Array<Report> {
    const config = context.getConfig<DefaultCodeStyleConfig>();
    const checker = CodeStyleStrategy.getCodeStyleChecker(config.style);
    const reports = new Array<Report>();

    const names = new Array<ClassHeadNameContext>();
    const printer = new TypeListener(names);
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, context.ast);
    for (const className of names) {
      if (!checker(className.text)) {
        reports.push(
          new Report(
            `Class name '${className.text}' is not in ${config.style}.`,
            className
          )
        );
      }
    }

    return reports;
  }
}
