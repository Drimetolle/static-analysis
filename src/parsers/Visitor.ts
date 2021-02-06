import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgContext, ExprContext } from "../grammar/CGrammarParser";
import { CGrammarVisitor } from "../grammar/CGrammarVisitor";

export default class Visitor implements CGrammarVisitor<unknown> {
  visitProg?: ((ctx: ProgContext) => unknown) | undefined;
  visitExpr?: ((ctx: ExprContext) => unknown) | undefined;
  visit(tree: ParseTree) {
    throw new Error("Method not implemented.");
  }
  visitChildren(node: RuleNode) {
    throw new Error("Method not implemented.");
  }
  visitTerminal(node: TerminalNode) {
    throw new Error("Method not implemented.");
  }
  visitErrorNode(node: ErrorNode) {
    throw new Error("Method not implemented.");
  }
}
