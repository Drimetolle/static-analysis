/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  AssignmentExpressionContext,
  BlockDeclarationContext,
  CompoundStatementContext,
  ConditionContext,
  DeclarationContext,
  DeclarationseqContext,
  DeclarationStatementContext,
  ExpressionContext,
  ExpressionStatementContext,
  FunctionDefinitionContext,
  IterationStatementContext,
  JumpStatementContext,
  ParameterDeclarationContext,
  SelectionStatementContext,
  SimpleDeclarationContext,
  StatementContext,
  StatementSeqContext,
  TranslationUnitContext,
} from "../grammar/CPP14Parser";
import { CPP14ParserVisitor } from "../grammar/CPP14ParserVisitor";
import ScopeTree, { ScopeNode } from "../source-analysis/data-flow/ScopeTree";
import CodeBlock from "../source-analysis/data-objects/CodeBlock";
import VariableDeclaration from "../source-analysis/data-objects/VariableDeclaration";
import { Walker } from "../linter/walkers/Walker";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
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
import ConditionVisitor, {
  ExpressionAndStatementContext,
} from "./ConditionVisitor";
import { head, isEmpty } from "ramda";
import DeclarationVisitor from "./DeclarationVisitor";
import CaseBlock from "../source-analysis/control-flow/blocks/switch/CaseBlock";
import DefaultCaseBlock from "../source-analysis/control-flow/blocks/switch/DefaultCaseBlock";
import SwitchBlock from "../source-analysis/control-flow/blocks/switch/SwitchBlock";
import ReturnBlock from "../source-analysis/control-flow/blocks/ReturnBlock";
import BreakBlock from "../source-analysis/control-flow/blocks/BreakBlock";
import ContinueBlock from "../source-analysis/control-flow/blocks/ContinueBlock";
import ANTLRExpressionConverter from "../source-analysis/expression/ANTLRExpressionConverter";
import { parseSimpleType } from "../types/TypeInference";
import TypeBuilder from "../types/Type";
import { TypesSource } from "../types/TypesSourceImplementation";

interface ScopeAndCFG {
  scope: ScopeTree;
  cfg: StartBlock;
}

export default class DataFlowWalker
  implements CPP14ParserVisitor<any>, Walker<ScopeAndCFG> {
  private readonly scopeTree: ScopeTree;
  private cfg!: BasicBlock;
  private readonly name: string;
  private readonly conditionVisitor: ConditionVisitor;
  private readonly declarationVisitor: DeclarationVisitor;
  private readonly expressionConverter: ANTLRExpressionConverter;
  private readonly typeBuilder: TypeBuilder;
  private readonly typesSource: TypesSource;

  constructor(
    fileName: string,
    conditionVisitor: ConditionVisitor,
    declarationVisitor: DeclarationVisitor,
    expressionConverter: ANTLRExpressionConverter,
    typeBuilder: TypeBuilder,
    typesSource: TypesSource
  ) {
    this.scopeTree = new ScopeTree();
    this.name = fileName;
    this.conditionVisitor = conditionVisitor;
    this.declarationVisitor = declarationVisitor;
    this.expressionConverter = expressionConverter;
    this.typeBuilder = typeBuilder;
    this.typesSource = typesSource;
  }

  visit(tree: TranslationUnitContext): ScopeAndCFG {
    this.cfg = new StartBlock(0, tree);
    const sequence = tree.declarationseq();
    if (sequence) {
      this.visitDeclarationseq(sequence);
    }

    return { scope: this.scopeTree, cfg: this.cfg };
  }

  visitDeclarationseq(ctx: DeclarationseqContext): any {
    if (ctx.children) {
      for (const i of ctx.children) {
        const block = (i as DeclarationContext).blockDeclaration();
        const functionDef = (i as DeclarationContext).functionDefinition();

        if (block) {
          this.blockStatement(block);
        } else if (functionDef) {
          const block = new FunctionBlock(
            0,
            functionDef,
            parseSimpleType(functionDef.declSpecifierSeq())
          );

          this.cfg.createEdge(block);
          this.topLevelFunctionStatement(functionDef, block);
        }
      }
    }
  }

  visitSimpleDeclaration(
    ctx: SimpleDeclarationContext
  ): Array<VariableDeclaration> {
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

  visitStatementSeq(ctx: StatementSeqContext): Array<StatementContext> {
    return ctx
      .statement()
      .filter((s) => !s.declarationStatement() || !s.expressionStatement());
  }

  private static setScope(root: ScopeNode, ctx: VariableDeclaration): void {
    root.data.declaredVariables.declare(ctx);
  }

  private setAssignScope(
    root: ScopeNode,
    ctx: AssignmentExpressionContext,
    node: ParserRuleContext
  ) {
    const variable = ctx.logicalOrExpression() ?? ctx.conditionalExpression();
    const init = ctx.initializerClause()?.assignmentExpression();

    if (variable && init) {
      // const variableName = variable.text;
      // TODO disable assign
      // root.data.declaredVariables.assign(
      //   variableName,
      //   new Expression(init),
      //   node
      // );
      //
      // this.changeVariableState(root, variableName);
    }
  }

  // private changeVariableState(root: ScopeNode, variableName: string) {
  //   const isDefined = this.scopeTree.isDefined(root, variableName);
  //   if (isDefined) {
  //     const variable = root.data.declaredVariables.getVariable(variableName);
  //
  //     if (variable) {
  //       variable.variable.state = VariableState.defined;
  //       variable.type = isDefined.type;
  //     }
  //   }
  // }

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

      for (const declaration of result) {
        DataFlowWalker.setScope(toNode, declaration);
      }
    }
  }

  private ifElseStatementVisitor(
    ctx: ConditionContext | undefined,
    toNode: ScopeNode
  ) {
    if (!ctx) {
      return;
    }

    const decSeq = ctx.declSpecifierSeq();
    const dec = ctx.declarator();
    const init = ctx.initializerClause()?.assignmentExpression();

    if (decSeq && dec && init) {
      const varDeclaration = this.declarationVisitor.createDeclaration(
        dec,
        init,
        decSeq
      );
      DataFlowWalker.setScope(toNode, varDeclaration);
    }
  }

  private parameterDeclarationStatement(
    ctx: ParameterDeclarationContext,
    toNode: ScopeNode
  ): void {
    const result = this.declarationVisitor.visitParameterDeclaration(ctx);
    if (result) {
      DataFlowWalker.setScope(toNode, result);
    }
  }

  private assignStatement(ctx: ExpressionContext, toNode: ScopeNode): void;
  private assignStatement(
    ctx: ExpressionStatementContext,
    toNode: ScopeNode
  ): void;
  private assignStatement(ctx: ParserRuleContext, toNode: ScopeNode): void {
    if (ctx instanceof ExpressionContext) {
      this.createScopesForAssigment(ctx.assignmentExpression(), toNode);
    } else if (ctx instanceof ExpressionStatementContext) {
      const expressions = ctx.expression()?.assignmentExpression() ?? [];

      this.createScopesForAssigment(expressions, toNode);
    }
  }

  private createScopesForAssigment(
    assigmentExpressions: Array<AssignmentExpressionContext>,
    toNode: ScopeNode
  ) {
    for (const assign of assigmentExpressions) {
      if (assign) {
        this.setAssignScope(toNode, assign, assign);
      }
    }
  }

  private blockStatement(block: BlockDeclarationContext) {
    const simpleDeclaration = block.simpleDeclaration();
    if (simpleDeclaration) {
      if (
        head(simpleDeclaration.declSpecifierSeq()?.declSpecifier() ?? [])
          ?.typeSpecifier()
          ?.classSpecifier()
          ?.classHead()
      ) {
        const a = this.typeBuilder.createType(simpleDeclaration);

        return;
      }

      const variableDeclarations = this.visitSimpleDeclaration(
        simpleDeclaration
      );

      for (const declaration of variableDeclarations) {
        DataFlowWalker.setScope(this.scopeTree?.getRoot, declaration);
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

      const outBlock = new OutBlock(0, functionDef);
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
  ): BasicBlock {
    const statements = Array.from(ctx);

    statements.forEach((statement) => {
      const declaration = statement.declarationStatement();
      const expressionStatement = statement.expressionStatement();
      const ifElse = statement.selectionStatement();
      const forLoop = statement.iterationStatement();
      const jumpStatement = statement.jumpStatement();
      const compoundStatement = statement.compoundStatement();
      const tryBlock = statement.tryBlock();

      if (declaration) {
        const newBlock = new LinearBlock(depth, declaration);
        newBlock.trySetScope(node);
        block.createEdge(newBlock);
        block = newBlock;

        this.declarationStatement(declaration, node);
      } else if (expressionStatement) {
        const newBlock = new LinearBlock(depth, expressionStatement);
        newBlock.trySetScope(node);
        block.createEdge(newBlock);
        block = newBlock;

        this.assignStatement(expressionStatement, node);

        const singleExpressionTest = expressionStatement.expression();
        if (singleExpressionTest) {
          this.expressionConverter.convertExpression(singleExpressionTest);
        }
      } else if (ifElse) {
        block = this.conditionStatementVisitor(ifElse, node, block, depth);
      } else if (forLoop) {
        block = this.loopStatementVisitor(node, forLoop, block, depth);
      } else if (jumpStatement) {
        block = DataFlowWalker.jumpStatementVisitor(
          jumpStatement,
          block,
          depth
        );
      } else if (compoundStatement) {
        const childNode = this.createNode(node);
        block = this.compoundStatementVisitor(
          compoundStatement,
          childNode,
          block,
          depth
        );
      } else if (tryBlock) {
        // const newBlock = new TryBlock(depth, "Try");
        // block.createEdge(newBlock);
        // block = newBlock;
        block = this.compoundStatementVisitor(
          tryBlock.compoundStatement(),
          node,
          block,
          depth
        );

        // TODO Need catch
        // for (const handler of tryBlock.handlerSeq().handler()) {
        //   const newBlock = new CatchBlock(
        //     depth,
        //     handler.exceptionDeclaration().text
        //   );
        //   block.createEdge(newBlock);
        //   block = newBlock;
        //
        //   this.compoundStatementVisitor(
        //     handler.compoundStatement(),
        //     node,
        //     block,
        //     depth
        //   );
        // }
      }
    });

    return block;
  }

  private compoundStatementVisitor(
    compoundStatement: CompoundStatementContext,
    node: Node<CodeBlock>,
    block: BasicBlock,
    depth: number
  ): BasicBlock {
    const innerStatements = compoundStatement.statementSeq()?.statement() ?? [];
    block = this.statementSequence(innerStatements, node, block, ++depth);
    depth--;

    return block;
  }

  /**
   * Mutate input block.
   */
  private conditionStatementVisitor(
    conditionStatement: SelectionStatementContext,
    node: Node<CodeBlock>,
    block: BasicBlock,
    depth: number
  ) {
    const outBlock = new StubBlock(depth, null as any);

    if (conditionStatement.If()) {
      const selectionSequence = this.conditionVisitor.extractStatementsFromIfElse(
        conditionStatement
      );

      for (const s of selectionSequence) {
        const childNode = this.createNode(node);
        const newBlock = new IfBlock(depth, s.condition, conditionStatement);
        newBlock.createEdge(outBlock);
        block.createEdge(newBlock);

        this.ifElseStatementVisitor(s.condition, childNode);
        this.statementSequence(
          s.statementSequence,
          childNode,
          newBlock,
          ++depth
        );
        depth--;
      }
      return outBlock;
    } else {
      const switchBlock = new SwitchBlock(
        depth,
        conditionStatement.condition().text,
        conditionStatement.condition() as ParserRuleContext
      );
      block.createEdge(switchBlock);
      block = switchBlock;

      const selectionSequence = this.conditionVisitor.extractStatementsFromCase(
        conditionStatement
      );

      let previousCase: BasicBlock | undefined;

      depth++;
      for (const statement of selectionSequence.cases) {
        const childNode = this.createNode(node);
        let newBlock = DataFlowWalker.createCaseBlock(
          depth - 1,
          statement,
          outBlock
        );

        block.createEdge(newBlock);

        if (previousCase) {
          previousCase.createEdge(newBlock);
        }

        previousCase = newBlock;

        this.statementSequence(
          statement.statementSequence,
          childNode,
          newBlock,
          depth
        );
      }

      return outBlock;
    }
  }

  /**
   * Mutate input block.
   */
  private static jumpStatementVisitor(
    jumpStatement: JumpStatementContext,
    block: BasicBlock,
    depth: number
  ) {
    const isReturn = jumpStatement.Return();
    const isBreak = jumpStatement.Break();
    const isContinue = jumpStatement.Continue();
    const isGoto = jumpStatement.Goto();

    if (isReturn) {
      block.createEdge(new ReturnBlock(depth, jumpStatement));
    } else if (isBreak) {
      block.createEdge(new BreakBlock(depth, jumpStatement));
    } else if (isContinue) {
      block.createEdge(new ContinueBlock(depth, jumpStatement));
    } else if (isGoto) {
    }

    return block;
  }

  private static createCaseBlock(
    depth: number,
    statement: ExpressionAndStatementContext,
    outBlock: StubBlock
  ) {
    let newBlock: BasicBlock;

    if (statement.expression == null) {
      newBlock = new DefaultCaseBlock(depth, null as any);
    } else if (Array.isArray(statement.expression)) {
      newBlock = new CaseBlock(
        depth,
        statement.expression.map((s) => s.text),
        // TODO
        null as any
      );
    } else {
      newBlock = new CaseBlock(
        depth,
        statement.expression.text,
        statement.expression
      );
    }
    newBlock.createEdge(outBlock);

    return newBlock;
  }

  /**
   * Mutate input block.
   */
  private loopStatementVisitor(
    node: Node<CodeBlock>,
    forLoop: IterationStatementContext,
    block: BasicBlock,
    depth: number
  ) {
    const childNode = this.createNode(node);

    const statement = this.conditionVisitor.extractStatementsFromLoop(forLoop);
    const declaration = forLoop.forInitStatement()?.simpleDeclaration();
    const assigmentExpression = forLoop
      .forInitStatement()
      ?.expressionStatement();
    const conditionExpression = forLoop.condition();
    const loopExpression = forLoop.expression();

    const outBlock = new StubBlock(depth, null as any);
    const newBlock = new LoopBlock(
      depth,
      forLoop?.condition()?.text ?? "",
      forLoop
    );
    newBlock.createEdge(outBlock);
    block.createEdge(newBlock);

    if (declaration) {
      this.declarationStatement(declaration, childNode);
    } else if (assigmentExpression) {
      this.assignStatement(assigmentExpression, childNode);
    }

    if (conditionExpression) {
      const expression = conditionExpression.expression();

      if (expression) {
        this.assignStatement(expression, childNode);
      }
    }

    if (loopExpression) {
      this.assignStatement(loopExpression, childNode);
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
    const declare = new CodeBlock();

    const result = this.scopeTree?.add(declare, toNode);

    if (result) {
      return result;
    }

    throw new Error("Invalid Scope");
  }

  async start(tree: TranslationUnitContext): Promise<ScopeAndCFG> {
    return this.visit(tree);
  }
}
