import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import {
  ClassNameContext,
  IdExpressionContext,
  ParameterDeclarationContext,
  UnqualifiedIdContext,
} from "../../grammar/CPP14Parser";

class IdentifierListener implements CPP14ParserListener {
  private readonly wrapper: { hasIdentifier: boolean };

  constructor(wrapper: { hasIdentifier: boolean }) {
    this.wrapper = wrapper;
  }

  enterUnqualifiedId(ctx: UnqualifiedIdContext) {
    if (ctx.parent instanceof IdExpressionContext) {
      this.setReustlIfIdentifierExist(ctx);
    }
  }

  enterClassName(ctx: ClassNameContext) {
    this.setReustlIfIdentifierExist(ctx);
  }

  private setReustlIfIdentifierExist(
    ctx: ClassNameContext | UnqualifiedIdContext
  ) {
    if (ctx.Identifier()) {
      this.wrapper.hasIdentifier = true;
    }
  }
}

class FunctionArgumentListener implements CPP14ParserListener {
  private readonly parameters: Array<ParameterDeclarationContext>;

  constructor(parameters: Array<ParameterDeclarationContext>) {
    this.parameters = parameters;
  }

  enterParameterDeclaration(ctx: ParameterDeclarationContext) {
    const wrapper: { hasIdentifier: boolean } = { hasIdentifier: false };
    const listener = new IdentifierListener(wrapper);
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, ctx);

    if (!wrapper.hasIdentifier) {
      this.parameters.push(ctx);
    }
  }
}

/**
 * @example
  //Bad
  main(int) {
  }
 */
export default class UnnamedFunctionParameters extends Rule {
  run(context: LinterContext): Array<Report> {
    const parameters = new Array<ParameterDeclarationContext>();
    const listener = new FunctionArgumentListener(parameters);
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, context.ast);

    return parameters.map(
      (parameter) =>
        new Report("Don't use unnamed function parameter", parameter)
    );
  }
}
