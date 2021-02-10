import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  BlockDeclarationContext,
  DeclarationContext,
  DeclarationseqContext,
  FunctionDefinitionContext,
  SimpleDeclarationContext,
  TranslationUnitContext,
} from "../grammar/CPP14Parser";
import { CPP14ParserVisitor } from "../grammar/CPP14ParserVisitor";
import { autoInjectable } from "tsyringe";
import ScopeTree, { Node } from "../utils/ScopeTree";
import DeclaredVariables from "../source-code/DeclaredVariables";
import VariableDeclaratorVisitor from "../source-code/VariableDeclaratorVisitor";

@autoInjectable()
export default class Visitor implements CPP14ParserVisitor<any> {
  constructor(
    private scopeTree?: ScopeTree,
    private variableDeclaratorVisitor?: VariableDeclaratorVisitor
  ) {}

  visitSimpleDeclaration(ctx: SimpleDeclarationContext): any {
    return this.variableDeclaratorVisitor?.simpleDeclaration(ctx);
  }

  private setScope(
    root: Node<DeclaredVariables>,
    ctx: SimpleDeclarationContext
  ) {
    const result = this.visitSimpleDeclaration(ctx);
    root.data.declare(result.variable, result.grammar, result.id, result.type);
  }

  visitDeclarationseq(ctx: DeclarationseqContext): any {
    if (ctx.children) {
      for (const i of ctx.children) {
        const block = (i as DeclarationContext).blockDeclaration();
        const functionDef = (i as DeclarationContext).functionDefinition();

        if (block) {
          this.blockStatement(block);
        } else if (functionDef) {
          this.functionStatement(functionDef);
        }
      }
    }
  }

  private blockStatement(block: BlockDeclarationContext) {
    const simpleDeclaration = block.simpleDeclaration();
    if (simpleDeclaration) {
      const tmp = this.visitSimpleDeclaration(simpleDeclaration);
      this.scopeTree?.getRoot.data.declare(
        tmp.variable,
        tmp.grammar,
        tmp.id,
        tmp.type
      );
    }
  }

  private functionStatement(functionDef: FunctionDefinitionContext) {
    const functionBody =
      functionDef
        .functionBody()
        .compoundStatement()
        ?.statementSeq()
        ?.statement() ?? [];
    for (const d of functionBody) {
      const declaration = d.declarationStatement();

      if (declaration) {
        const declare = new DeclaredVariables();
        this.scopeTree?.add(declare, this.scopeTree?.getRoot);
        const scopeNode = this.scopeTree?.find(declare);
        const simpleDeclaration = declaration
          ?.blockDeclaration()
          ?.simpleDeclaration();

        if (scopeNode && simpleDeclaration) {
          this.setScope(scopeNode, simpleDeclaration);
        }
      }
    }
  }

  visit(tree: TranslationUnitContext): ScopeTree {
    const sequence = tree.declarationseq();
    if (sequence) {
      this.visitDeclarationseq(sequence);
    }

    return this.scopeTree!;
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
