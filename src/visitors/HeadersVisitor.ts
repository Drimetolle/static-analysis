import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { CPP14ParserVisitor } from "../grammar/CPP14ParserVisitor";
import { TranslationUnitContext } from "../grammar/CPP14Parser";

export default class HeadersVisitor implements CPP14ParserVisitor<any> {
  visit(tree: TranslationUnitContext): void {
    // console.log(tree?.declarationseq()?.declaration(2)?.text);
  }

  visitChildren(node: RuleNode): never {
    throw new Error("Method not implemented." + node.text);
  }

  visitTerminal(node: TerminalNode): never {
    throw new Error("Method not implemented." + node.text);
  }

  visitErrorNode(node: ErrorNode): never {
    throw new Error("Method not implemented." + node.text);
  }
}
