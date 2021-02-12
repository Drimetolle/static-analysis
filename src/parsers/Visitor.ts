/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { DeclarationVar } from "../source-code/DTOs";
import PositionInFile from "../source-code/PositionInFile";

@autoInjectable()
export default class Visitor implements CPP14ParserVisitor<any> {
  private readonly scopeTree: ScopeTree;
  private readonly variableDeclaratorVisitor: VariableDeclaratorVisitor;

  constructor(
    scopeTree?: ScopeTree,
    variableDeclaratorVisitor?: VariableDeclaratorVisitor
  ) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.scopeTree = scopeTree!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.variableDeclaratorVisitor = variableDeclaratorVisitor!;
  }

  visitSimpleDeclaration(ctx: SimpleDeclarationContext): DeclarationVar {
    return this.variableDeclaratorVisitor?.simpleDeclaration(ctx);
  }

  private setScope(
    root: Node<DeclaredVariables>,
    ctx: SimpleDeclarationContext
  ) {
    const result = this.visitSimpleDeclaration(ctx);
    root.data.declare(
      result.variable,
      result.grammar,
      new PositionInFile(result.line, result.start),
      result.type
    );
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
        new PositionInFile(tmp.line, tmp.start),
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

    return this.scopeTree;
  }

  visitChildren(node: RuleNode): never {
    throw new Error("Method not implemented.");
  }

  visitTerminal(node: TerminalNode): never {
    throw new Error("Method not implemented.");
  }

  visitErrorNode(node: ErrorNode): never {
    throw new Error("Method not implemented.");
  }
}
