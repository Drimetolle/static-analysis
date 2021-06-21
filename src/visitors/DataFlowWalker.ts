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
  IterationStatementContext,
  ParameterDeclarationContext,
  SelectionStatementContext,
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
import { parseType } from "../utils/TypeInference";
import { Walker } from "../linter/walkers/Walker";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { VariableState } from "../source-analysis/data-objects/VariableDeclaration";
import Expression from "../source-analysis/data-objects/Expression";
import BasicBlock from "../source-analysis/control-flow/blocks/BasicBlock";
import FunctionBlock from "../source-analysis/control-flow/blocks/FunctionBlock";
import LinearBlock from "../source-analysis/control-flow/blocks/LinearBlock";
import LoopBlock from "../source-analysis/control-flow/blocks/LoopBlock";
import IfBlock from "../source-analysis/control-flow/blocks/IfBlock";
import StubBlock from "../source-analysis/control-flow/blocks/StubBlock";
import CFGValidator from "../source-analysis/control-flow/CFGValidator";
import { Node } from "../utils/Tree";
import OutBlock from "../source-analysis/control-flow/blocks/OutBlock";
import StartBlock from "../source-analysis/control-flow/blocks/StartBlock";
import ConditionVisitor from "./ConditionVisitor";
import { isEmpty } from "ramda";
import DeclarationVisitor, {
  DeclarationVarAndNode,
} from "./DeclarationVisitor";

export default class DataFlowWalker
  implements CPP14ParserVisitor<any>, Walker<ScopeTree> {
  private readonly scopeTree: ScopeTree;
  private readonly cfg: BasicBlock;
  private readonly name: string;
  private readonly conditionVisitor: ConditionVisitor;
  private readonly declarationVisitor: DeclarationVisitor;

  constructor(
    fileName: string,
    conditionVisitor: ConditionVisitor,
    declarationVisitor: DeclarationVisitor
  ) {
    this.scopeTree = new ScopeTree();
    this.name = fileName;
    this.cfg = new StartBlock(0);
    this.conditionVisitor = conditionVisitor;
    this.declarationVisitor = declarationVisitor;
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
      const firstRay = new LinearBlock(0);

      for (const i of ctx.children) {
        const block = (i as DeclarationContext).blockDeclaration();
        const functionDef = (i as DeclarationContext).functionDefinition();

        if (block) {
          this.blockStatement(block);
        } else if (functionDef) {
          const block = new FunctionBlock(0);
          this.cfg.createEdge(block);
          this.topLevelFunctionStatement(functionDef, block);
        }
      }

      this.cfg.createEdge(firstRay);
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
      return this.declarationVisitor.simpleDeclaration(ctx);
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

  private setScope(
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
      node.start.startIndex,
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
        node.start.startIndex,
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
        this.setScope(toNode, declaration, node);
      }
    }
  }

  private conditionStatement(ctx: ConditionContext, toNode: ScopeNode) {
    const decSeq = ctx.declSpecifierSeq();
    const dec = ctx.declarator();
    const init = ctx.initializerClause()?.assignmentExpression();

    if (decSeq && dec && init) {
      const varDeclaration = this.declarationVisitor.createDeclaration(
        dec,
        init,
        decSeq
      );
      this.setScope(toNode, varDeclaration, dec);
    }
  }

  private parameterDeclarationStatement(
    ctx: ParameterDeclarationContext,
    toNode: ScopeNode
  ): void {
    const result = this.visitParameterDeclaration(ctx);
    if (result) {
      this.setScope(toNode, result, ctx);
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
        this.setScope(this.scopeTree?.getRoot, declaration, node);
      }
    }
  }

  private topLevelFunctionStatement(
    functionDef: FunctionDefinitionContext,
    functionBlock: FunctionBlock
  ) {
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

    if (functionBody.length > 0 || functionArgs.length > 0) {
      const scopeNode = this.createNode(this.scopeTree?.getRoot);

      for (const d of functionArgs) {
        this.parameterDeclarationStatement(d, scopeNode);
      }

      const outBlock = new OutBlock(0);
      const lastBlock: BasicBlock = this.statementSequence(
        functionBody,
        scopeNode,
        functionBlock,
        functionBlock.scopeDepth
      );
      lastBlock.createEdge(outBlock);

      new CFGValidator(outBlock).validateFunction(functionBlock);
    }
  }

  private statementSequence(
    ctx: Array<StatementContext>,
    node: ScopeNode,
    block: BasicBlock,
    depth: number
  ): any {
    const statements = Array.from(ctx);

    statements.forEach((statement) => {
      const declaration = statement.declarationStatement();
      const assign = statement.expressionStatement();
      const ifElse = statement.selectionStatement();
      const forLoop = statement.iterationStatement();

      if (declaration) {
        const newBlock = new LinearBlock(depth, declaration.text);
        block.createEdge(newBlock);
        block = newBlock;

        this.declarationStatement(declaration, node);
      } else if (assign) {
        const newBlock = new LinearBlock(depth, assign.text);
        block.createEdge(newBlock);
        block = newBlock;

        this.assignStatement(assign, node);
      } else if (ifElse) {
        block = this.ifElseStatement(ifElse, node, block, depth);
      } else if (forLoop) {
        block = this.loopStatement(node, forLoop, block, depth);
      }
    });

    return block;
  }

  /**
   * Mutate input block.
   */
  private ifElseStatement(
    ifElse: SelectionStatementContext,
    node: Node<CodeBlock>,
    block: BasicBlock,
    depth: number
  ) {
    const outBlock = new StubBlock(depth);

    if (ifElse.If()) {
      const selectionSequence = this.conditionVisitor.extractStatementsFromIfElse(
        ifElse
      );

      for (const s of selectionSequence) {
        const childNode = this.createNode(node);
        const newBlock = new IfBlock(depth, s.condition.text, s.condition.text);
        newBlock.createEdge(outBlock);
        block.createEdge(newBlock);

        this.conditionStatement(s.condition, childNode);
        this.statementSequence(
          s.statementSequence,
          childNode,
          newBlock,
          ++depth
        );
      }
      return outBlock;
    } else {
      const selectionSequence = this.conditionVisitor.extractStatementsFromCase(
        ifElse
      );

      return block;
    }
  }

  /**
   * Mutate input block.
   */
  private loopStatement(
    node: Node<CodeBlock>,
    forLoop: IterationStatementContext,
    block: BasicBlock,
    depth: number
  ) {
    const childNode = this.createNode(node);

    const statement = this.conditionVisitor.extractStatementsFromLoop(forLoop);
    const declaration = forLoop.forInitStatement()?.simpleDeclaration();

    const outBlock = new StubBlock(depth);
    const newBlock = new LoopBlock(depth, forLoop?.condition()?.text ?? "");
    newBlock.createEdge(outBlock);
    block.createEdge(newBlock);

    if (declaration) {
      this.declarationStatement(declaration, childNode);
    }

    if (!isEmpty(statement)) {
      this.statementSequence(statement, childNode, newBlock, ++depth);
    }

    return outBlock;
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

    const result = this.scopeTree?.add(declare, toNode);

    if (result) {
      return result;
    }

    throw new Error("Invalid Scope");
  }

  async start(tree: TranslationUnitContext): Promise<ScopeTree> {
    return this.visit(tree);
  }
}
