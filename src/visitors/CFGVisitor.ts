import { CPP14ParserVisitor } from "../grammar/CPP14ParserVisitor";
import { Walker } from "../linter/walkers/Walker";
import BasicBlock from "../source-analysis/control-flow/BasicBlock";
import {
  DeclarationContext,
  DeclarationseqContext,
  FunctionDefinitionContext,
  TranslationUnitContext,
} from "../grammar/CPP14Parser";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import StartBlock from "../source-analysis/control-flow/StartBlock";
import FunctionBlock from "../source-analysis/control-flow/FunctionBlock";

export default class CFGVisitor
  implements CPP14ParserVisitor<any>, Walker<BasicBlock> {
  private cfg: BasicBlock;

  constructor() {
    this.cfg = new StartBlock();
  }

  visitDeclarationseq(ctx: DeclarationseqContext): any {
    if (ctx.children) {
      for (const i of ctx.children) {
        const block = (i as DeclarationContext).blockDeclaration();
        const functionDef = (i as DeclarationContext).functionDefinition();

        if (block) {
          // console.log(block.text);
        } else if (functionDef) {
          this.a(functionDef);
        }
      }
    }
  }

  private a(ctx: FunctionDefinitionContext) {
    const statments =
      ctx.functionBody().compoundStatement()?.statementSeq()?.statement() ?? [];
    for (const s of statments) {
      const selection = s.selectionStatement();
      const loop = s.iterationStatement();

      if (selection) {
        // console.log(selection.statement(1));
        if (selection.Else()) {
          // console.log(selection.getChild(6)?.text);
        }
      } else if (loop) {
        //
      }
    }
  }

  visit(tree: TranslationUnitContext): BasicBlock {
    const sequence = tree.declarationseq();
    if (sequence) {
      this.visitDeclarationseq(sequence);
    }

    return {} as any;
  }

  async start(tree: TranslationUnitContext): Promise<BasicBlock> {
    return this.visit(tree);
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
