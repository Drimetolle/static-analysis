/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  AssignmentExpressionContext,
  BlockDeclarationContext,
  DeclarationContext,
  DeclarationseqContext,
  DeclarationStatementContext,
  ExpressionStatementContext,
  FunctionDefinitionContext,
  SelectionStatementContext,
  SimpleDeclarationContext,
  StatementContext,
  StatementSeqContext,
  TranslationUnitContext,
} from "../grammar/CPP14Parser";
import { CPP14ParserVisitor } from "../grammar/CPP14ParserVisitor";
import { autoInjectable } from "tsyringe";
import ScopeTree, { ScopeNode } from "../utils/ScopeTree";
import DeclaredVariablesInScope from "../source-code/DeclaredVariablesInScope";
import VariableDeclaratorVisitor from "./VariableDeclaratorVisitor";
import { DeclarationVar } from "../source-code/data-objects/DTOs";
import PositionInFile from "../source-code/data-objects/PositionInFile";
import IfElseStatementVisitor from "./IfElseStatementVisitor";
import GrammarDerivation from "../source-code/data-objects/GrammarDerivation";

@autoInjectable()
export default class Visitor implements CPP14ParserVisitor<any> {
  private readonly scopeTree: ScopeTree;
  private readonly variableDeclaratorVisitor: VariableDeclaratorVisitor;
  private readonly ifElseStatementVisitor: IfElseStatementVisitor;

  constructor(
    scopeTree?: ScopeTree,
    variableDeclaratorVisitor?: VariableDeclaratorVisitor,
    ifElseStatementVisitor?: IfElseStatementVisitor
  ) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.scopeTree = scopeTree!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.variableDeclaratorVisitor = variableDeclaratorVisitor!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.ifElseStatementVisitor = ifElseStatementVisitor!;
  }

  visit(tree: TranslationUnitContext): ScopeTree {
    const sequence = tree.declarationseq();
    if (sequence) {
      this.visitDeclarationseq(sequence);
    }

    return this.scopeTree;
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

  visitSimpleDeclaration(ctx: SimpleDeclarationContext): DeclarationVar | null {
    if (
      !ctx
        .declSpecifierSeq()
        ?.declSpecifier(0)
        .typeSpecifier()
        ?.classSpecifier()
    ) {
      return this.variableDeclaratorVisitor?.simpleDeclaration(ctx);
    } else {
      return null;
    }
  }

  visitStatementSeq(ctx: StatementSeqContext): Array<StatementContext> {
    //TODO нужно сделать еще и присваивание
    return ctx
      .statement()
      .filter((s) => !s.declarationStatement() || !s.expressionStatement());
  }

  visitSelectionStatement(ctx: SelectionStatementContext): void {
    console.log(ctx.text);
  }

  private setScope(root: ScopeNode, ctx: SimpleDeclarationContext) {
    const result = this.visitSimpleDeclaration(ctx);

    if (result) {
      root.data.declare(
        result.variable,
        result.grammar,
        new PositionInFile(result.line, result.start)
      );
    }
  }

  private static setAssignScope(
    root: ScopeNode,
    ctx: AssignmentExpressionContext
  ) {
    const variable = ctx.logicalOrExpression();
    const init = ctx.initializerClause();

    if (variable && init) {
      root.data.assign(
        variable.text,
        new GrammarDerivation(
          ctx.start.startIndex,
          ctx.start.stopIndex,
          ctx.start.line,
          init.text
        ),
        new PositionInFile(ctx.start.line, ctx.start.startIndex)
      );
    }
  }

  private declarationStatement(
    ctx: DeclarationStatementContext,
    toNode: ScopeNode
  ): void {
    const simpleDeclaration = ctx?.blockDeclaration()?.simpleDeclaration();

    if (simpleDeclaration) {
      this.setScope(toNode, simpleDeclaration);
    }
  }

  private static assignStatement(
    ctx: ExpressionStatementContext,
    toNode: ScopeNode
  ): void {
    const childCount = ctx.expression()?.assignmentExpression().length;
    const lastChildIndex = childCount ? childCount - 1 : 0;
    const assign = ctx.expression()?.assignmentExpression(lastChildIndex);

    if (assign) {
      Visitor.setAssignScope(toNode, assign);
    }
  }

  private blockStatement(block: BlockDeclarationContext) {
    const simpleDeclaration = block.simpleDeclaration();
    if (simpleDeclaration) {
      const tmp = this.visitSimpleDeclaration(simpleDeclaration);
      if (tmp) {
        this.scopeTree?.getRoot.data.declare(
          tmp.variable,
          tmp.grammar,
          new PositionInFile(tmp.line, tmp.start)
        );
      }
    }
  }

  private functionStatement(functionDef: FunctionDefinitionContext) {
    const functionBody =
      functionDef
        .functionBody()
        .compoundStatement()
        ?.statementSeq()
        ?.statement() ?? [];
    let scopeNode: ScopeNode | null = null;

    if (functionBody.length > 0) {
      scopeNode = this.createNode(this.scopeTree?.getRoot);
    }

    if (scopeNode) {
      for (const d of functionBody) {
        const declaration = d.declarationStatement();
        const ifElse = d.selectionStatement();
        const assign = d.expressionStatement();

        if (declaration) {
          this.declarationStatement(declaration, scopeNode);
        } else if (ifElse) {
          for (const s of this.ifElseStatementVisitor.ifElseStatement(ifElse)) {
            this.statementSequence(s, scopeNode);
          }
        } else if (assign) {
          Visitor.assignStatement(assign, scopeNode);
        }
      }
    } else {
      throw new Error("Scope not created");
    }
  }

  private statementSequence(ctx: StatementSeqContext, node: ScopeNode): void {
    const childNode = this.createNode(node);

    if (childNode) {
      for (const s of this.visitStatementSeq(ctx)) {
        const declaration = s.declarationStatement();
        const assign = s.expressionStatement();

        if (declaration) {
          this.declarationStatement(declaration, childNode);
        } else if (assign) {
          Visitor.assignStatement(assign, childNode);
        }
      }
    }
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

  private createNode(toNode: ScopeNode) {
    const declare = new DeclaredVariablesInScope();
    this.scopeTree?.add(declare, toNode);
    return this.scopeTree?.find(declare);
  }
}
