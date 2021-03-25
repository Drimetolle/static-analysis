/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  AssignmentExpressionContext,
  BlockDeclarationContext,
  ConditionContext,
  DeclarationContext,
  DeclarationseqContext,
  DeclarationStatementContext,
  ExpressionStatementContext,
  FunctionDefinitionContext,
  ParameterDeclarationContext,
  SimpleDeclarationContext,
  StatementContext,
  StatementSeqContext,
  TranslationUnitContext,
} from "../grammar/CPP14Parser";
import { CPP14ParserVisitor } from "../grammar/CPP14ParserVisitor";
import { autoInjectable } from "tsyringe";
import ScopeTree, { ScopeNode } from "../source-analysis/data-flow/ScopeTree";
import PositionInFile from "../source-analysis/data-objects/PositionInFile";
import GrammarDerivation from "../source-analysis/data-objects/GrammarDerivation";
import CodeBlock from "../source-analysis/data-objects/CodeBlock";
import DeclarationVar from "../source-analysis/data-objects/DeclarationVar";
import { KeyWords } from "../source-analysis/data-objects/LanguageKeyWords";
import { ifElseStatement, loopStatement } from "./VisitControlFlowStatement";
import { createDeclaration, simpleDeclaration } from "./VisitVariableStatement";
import { declareMethod } from "./VisitFunctionStatment";
import { parseSingleType } from "../utils/TypeInference";
import DeclaredMethods from "../source-analysis/methods/DeclaredMethods";
import HeaderScope from "../source-analysis/methods/HeaderScope";
import { Information, Walker } from "../linter/walkers/Walker";

@autoInjectable()
export default class DataFlowVisitor
  implements CPP14ParserVisitor<any>, Walker {
  private readonly scopeTree: ScopeTree;
  private readonly methods: DeclaredMethods;
  private readonly name: string;

  constructor(scopeTree?: ScopeTree) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.scopeTree = scopeTree!;
    this.name = "test1";
    this.methods = new DeclaredMethods([new HeaderScope(this.name)]);
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

  visitSimpleDeclaration(ctx: SimpleDeclarationContext): Array<DeclarationVar> {
    if (
      !ctx
        .declSpecifierSeq()
        ?.declSpecifier(0)
        .typeSpecifier()
        ?.classSpecifier()
    ) {
      return simpleDeclaration(ctx);
    } else {
      return [];
    }
  }

  visitParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): DeclarationVar | null {
    const type = parseSingleType(ctx.declSpecifierSeq());
    const name = ctx.declSpecifierSeq().declSpecifier(1).text;

    return new DeclarationVar(
      name,
      new GrammarDerivation(
        ctx.start.startIndex,
        ctx.start.stopIndex,
        ctx.start.line,
        KeyWords.Null
      ),
      type
    );
  }

  visitStatementSeq(ctx: StatementSeqContext): Array<StatementContext> {
    return ctx
      .statement()
      .filter((s) => !s.declarationStatement() || !s.expressionStatement());
  }

  private static setScope(root: ScopeNode, ctx: DeclarationVar): void {
    root.data.declaredVariables.declare(
      ctx.variable,
      ctx.grammar,
      new PositionInFile(ctx.grammar.line, ctx.grammar.start)
    );
  }

  private static setAssignScope(
    root: ScopeNode,
    ctx: AssignmentExpressionContext
  ) {
    const variable = ctx.logicalOrExpression();
    const init = ctx.initializerClause();

    if (variable && init) {
      root.data.declaredVariables.assign(
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
    ctx: SimpleDeclarationContext,
    toNode: ScopeNode
  ): void;
  private declarationStatement(
    ctx: DeclarationStatementContext,
    toNode: ScopeNode
  ): void;
  private declarationStatement(ctx: any, toNode: ScopeNode): void {
    let simpleDeclaration;

    if (ctx instanceof SimpleDeclarationContext) {
      simpleDeclaration = ctx;
    } else if (ctx instanceof DeclarationStatementContext) {
      simpleDeclaration = ctx?.blockDeclaration()?.simpleDeclaration();
    }

    if (simpleDeclaration) {
      const result = this.visitSimpleDeclaration(simpleDeclaration);

      for (const d of result) {
        DataFlowVisitor.setScope(toNode, d);
      }
    }
  }

  private static conditionStatement(ctx: ConditionContext, toNode: ScopeNode) {
    const decSeq = ctx.declSpecifierSeq();
    const dec = ctx.declarator();
    const init = ctx.initializerClause();

    if (decSeq && dec && init) {
      const varDeclaration = createDeclaration(dec, init, decSeq);
      DataFlowVisitor.setScope(toNode, varDeclaration);
    }
  }

  private parameterDeclarationStatement(
    ctx: ParameterDeclarationContext,
    toNode: ScopeNode
  ): void {
    const result = this.visitParameterDeclaration(ctx);
    if (result) {
      DataFlowVisitor.setScope(toNode, result);
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
      DataFlowVisitor.setAssignScope(toNode, assign);
    }
  }

  private blockStatement(block: BlockDeclarationContext) {
    const simpleDeclaration = block.simpleDeclaration();
    if (simpleDeclaration) {
      const tmp = this.visitSimpleDeclaration(simpleDeclaration);

      for (const d of tmp) {
        DataFlowVisitor.setScope(this.scopeTree?.getRoot, d);
      }
    }
  }

  private functionStatement(functionDef: FunctionDefinitionContext) {
    const alias = functionDef
      .declarator()
      .pointerDeclarator()
      ?.noPointerDeclarator();
    const functionName = alias?.noPointerDeclarator();
    const functionType = functionDef.declSpecifierSeq();
    const functionArgs =
      alias
        ?.parametersAndQualifiers()
        ?.parameterDeclarationClause()
        ?.parameterDeclarationList()
        ?.parameterDeclaration() ?? [];

    if (functionName && functionType) {
      const signature = declareMethod(
        functionName.text,
        functionArgs,
        functionType
      );

      this.methods.addMethodInScope(this.name, signature);
    }

    const functionBody =
      functionDef
        .functionBody()
        .compoundStatement()
        ?.statementSeq()
        ?.statement() ?? [];
    let scopeNode: ScopeNode | null = null;

    if (functionBody.length > 0 || functionArgs.length > 0) {
      scopeNode = this.createNode(this.scopeTree?.getRoot);
    }

    if (scopeNode) {
      for (const d of functionArgs) {
        this.parameterDeclarationStatement(d, scopeNode);
      }

      this.statementSequence(functionBody, scopeNode);
    } else {
      throw new Error("Scope not created");
    }
  }

  private statementSequence(
    ctx: Array<StatementContext>,
    node: ScopeNode
  ): void;
  private statementSequence(ctx: StatementSeqContext, node: ScopeNode): void;
  private statementSequence(ctx: any, node: ScopeNode): void {
    const childNode = this.createNode(node);

    if (childNode) {
      const a = new Array<StatementContext>();

      if (ctx instanceof StatementSeqContext) {
        a.push(...this.visitStatementSeq(ctx));
      } else if (ctx instanceof Array) {
        a.push(...ctx);
      }

      for (const s of a) {
        const declaration = s.declarationStatement();
        const assign = s.expressionStatement();
        const ifElse = s.selectionStatement();
        const forLoop = s.iterationStatement();

        if (declaration) {
          this.declarationStatement(declaration, childNode);
        } else if (assign) {
          DataFlowVisitor.assignStatement(assign, childNode);
        } else if (ifElse) {
          for (const s of ifElseStatement(ifElse)) {
            DataFlowVisitor.conditionStatement(s.condition, childNode);
            this.statementSequence(s.statement, childNode);
          }
        } else if (forLoop) {
          const statement = loopStatement(forLoop);
          const declaration = forLoop.forInitStatement()?.simpleDeclaration();

          if (declaration) {
            this.declarationStatement(declaration, childNode);
          }

          if (statement) {
            this.statementSequence(statement, childNode);
          }
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
    let post = 0;
    const tmp = toNode.parent?.data.post;

    if (tmp == 0) {
      post = tmp + 1;
    } else if (tmp) {
      post = tmp + 1;
    }

    const declare = new CodeBlock(post);

    return this.scopeTree?.add(declare, toNode);
  }

  async start(tree: TranslationUnitContext): Promise<Information> {
    return { scope: this.visit(tree), methods: this.methods };
  }
}
