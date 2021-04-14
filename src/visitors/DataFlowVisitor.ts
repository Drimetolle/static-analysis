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
import ScopeTree, { ScopeNode } from "../source-analysis/data-flow/ScopeTree";
import PositionInFile from "../source-analysis/data-objects/PositionInFile";
import CodeBlock from "../source-analysis/data-objects/CodeBlock";
import DeclarationVar from "../source-analysis/data-objects/DeclarationVar";
import { ifElseStatement, loopStatement } from "./VisitControlFlowStatement";
import { createDeclaration, simpleDeclaration } from "./VisitVariableStatement";
import { parseType } from "../utils/TypeInference";
import { Walker } from "../linter/walkers/Walker";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { VariableState } from "../source-analysis/data-objects/VariableDeclaration";
import Expression from "../source-analysis/data-objects/Expression";

export interface DeclarationVarAndNode {
  declaration: DeclarationVar;
  node: ParserRuleContext;
}

export default class DataFlowVisitor
  implements CPP14ParserVisitor<any>, Walker<ScopeTree> {
  private readonly scopeTree: ScopeTree;
  private readonly name: string;

  constructor(fileName: string, scopeTree: ScopeTree) {
    this.scopeTree = scopeTree;
    this.name = fileName;
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
          this.topLevelFunctionStatement(functionDef);
        }
      }
    }
  }

  visitSimpleDeclaration(
    ctx: SimpleDeclarationContext
  ): Array<DeclarationVarAndNode> {
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
    const type = parseType(ctx.declSpecifierSeq());
    const argumentByOther = ctx.declarator();

    if (argumentByOther) {
      const name = argumentByOther.pointerDeclarator()?.noPointerDeclarator()
        ?.text;
      return new DeclarationVar(name!, type);
    }

    const argumentByValue = ctx.declSpecifierSeq().declSpecifier(1).text;

    if (argumentByValue) {
      return new DeclarationVar(argumentByValue, type);
    }

    return null;
  }

  visitStatementSeq(ctx: StatementSeqContext): Array<StatementContext> {
    return ctx
      .statement()
      .filter((s) => !s.declarationStatement() || !s.expressionStatement());
  }

  private static setScope(
    root: ScopeNode,
    ctx: DeclarationVar,
    node: ParserRuleContext
  ): void {
    let expression: Expression;
    if (ctx.expression) {
      expression = new Expression(ctx.expression);
    } else {
      expression = new Expression();
    }

    root.data.declaredVariables.declare(
      ctx.variable,
      expression,
      new PositionInFile(node.start.line, node.start.charPositionInLine),
      node
    );
  }

  private setAssignScope(
    root: ScopeNode,
    ctx: AssignmentExpressionContext,
    node: ParserRuleContext
  ) {
    const variable = ctx.logicalOrExpression() ?? ctx.conditionalExpression();
    const init = ctx.initializerClause()?.assignmentExpression();

    if (variable && init) {
      const variableName = variable.text;

      root.data.declaredVariables.assign(
        variableName,
        new Expression(init),
        new PositionInFile(ctx.start.line, ctx.start.charPositionInLine),
        node
      );

      this.changeVariableState(root, variableName);
    }
  }

  private changeVariableState(root: ScopeNode, variableName: string) {
    const isDefined = this.scopeTree.isDefined(root, variableName);
    if (isDefined) {
      const variable = root.data.declaredVariables.getVariable(variableName);

      if (variable) {
        variable.variable.state = VariableState.defined;
      }
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

      for (const { declaration, node } of result) {
        DataFlowVisitor.setScope(toNode, declaration, node);
      }
    }
  }

  private static conditionStatement(ctx: ConditionContext, toNode: ScopeNode) {
    const decSeq = ctx.declSpecifierSeq();
    const dec = ctx.declarator();
    const init = ctx.initializerClause()?.assignmentExpression();

    if (decSeq && dec && init) {
      const varDeclaration = createDeclaration(dec, init, decSeq);
      DataFlowVisitor.setScope(toNode, varDeclaration, dec);
    }
  }

  private parameterDeclarationStatement(
    ctx: ParameterDeclarationContext,
    toNode: ScopeNode
  ): void {
    const result = this.visitParameterDeclaration(ctx);
    if (result) {
      DataFlowVisitor.setScope(toNode, result, ctx);
    }
  }

  private assignStatement(
    ctx: ExpressionStatementContext,
    toNode: ScopeNode
  ): void {
    const expressions = ctx.expression()?.assignmentExpression() ?? [];

    for (const assign of expressions) {
      if (assign) {
        this.setAssignScope(toNode, assign, assign);
      }
    }
  }

  private blockStatement(block: BlockDeclarationContext) {
    const simpleDeclaration = block.simpleDeclaration();
    if (simpleDeclaration) {
      const tmp = this.visitSimpleDeclaration(simpleDeclaration);

      for (const { declaration, node } of tmp) {
        DataFlowVisitor.setScope(this.scopeTree?.getRoot, declaration, node);
      }
    }
  }

  private topLevelFunctionStatement(functionDef: FunctionDefinitionContext) {
    const alias = functionDef
      .declarator()
      .pointerDeclarator()
      ?.noPointerDeclarator();
    const functionArgs =
      alias
        ?.parametersAndQualifiers()
        ?.parameterDeclarationClause()
        ?.parameterDeclarationList()
        ?.parameterDeclaration() ?? [];

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
        this.declarationStatement(declaration, node);
      } else if (assign) {
        this.assignStatement(assign, node);
      } else if (ifElse) {
        for (const s of ifElseStatement(ifElse)) {
          const childNode = this.createNode(node);
          if (childNode) {
            DataFlowVisitor.conditionStatement(s.condition, childNode);
            this.statementSequence(s.statement, childNode);
          }
        }
      } else if (forLoop) {
        const childNode = this.createNode(node);
        if (childNode) {
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

  async start(tree: TranslationUnitContext): Promise<ScopeTree> {
    return this.visit(tree);
  }
}
