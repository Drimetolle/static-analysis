import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import {
  IterationStatementContext,
  LiteralContext,
} from "../../grammar/CPP14Parser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

class LoopListener implements CPP14ParserListener {
  private readonly reports;

  constructor(names: Array<Report>) {
    this.reports = names;
  }

  private static checkSimpleLiteral(
    literal: LiteralContext | undefined
  ): literal is LiteralContext {
    if (literal === undefined) {
      return false;
    }

    return (
      literal.IntegerLiteral() instanceof TerminalNode ||
      literal.CharacterLiteral() instanceof TerminalNode ||
      literal.FloatingLiteral() instanceof TerminalNode ||
      literal.StringLiteral() instanceof TerminalNode
    );
  }

  enterIterationStatement(ctx: IterationStatementContext) {
    if (ctx.While()) {
      const isSingleLiteral = ctx
        .condition()
        ?.expression()
        ?.assignmentExpression(0)
        .conditionalExpression()
        ?.logicalOrExpression()
        ?.logicalAndExpression();
      if (isSingleLiteral != undefined && isSingleLiteral.length > 1) {
        return;
      }

      const expression = ctx
        .condition()
        ?.expression()
        ?.assignmentExpression(0)
        .conditionalExpression()
        ?.logicalOrExpression()
        .logicalAndExpression(0)
        .inclusiveOrExpression(0)
        .exclusiveOrExpression(0)
        .andExpression(0)
        .equalityExpression(0)
        .relationalExpression(0)
        .shiftExpression(0)
        .additiveExpression(0)
        .multiplicativeExpression(0)
        .pointerMemberExpression(0)
        .castExpression(0)
        .unaryExpression();

      const simpleLiterals = expression
        ?.postfixExpression()
        ?.primaryExpression()
        ?.literal();

      const postfixLiterals = expression
        ?.unaryExpression()
        ?.postfixExpression()
        ?.primaryExpression()
        ?.literal();

      if (
        LoopListener.checkSimpleLiteral(simpleLiterals?.pop()) ||
        LoopListener.checkSimpleLiteral(postfixLiterals?.pop())
      ) {
        this.reports.push(
          new Report(
            "For infinite loop, use the while (true).",
            ctx.condition()!
          )
        );
      }
    }
  }
}

export default class InfinityLoopTruePredicate extends Rule {
  run(context: LinterContext): Array<Report> {
    const loops = new Array<Report>();
    const printer = new LoopListener(loops);
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, context.ast);
    for (const loop of loops) {
    }

    return loops;
  }
}
