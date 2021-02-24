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
  DeclaratorContext,
  DeclSpecifierSeqContext,
  ExpressionStatementContext,
  FunctionDefinitionContext,
  InitializerClauseContext,
  IterationStatementContext,
  ParameterDeclarationContext,
  SelectionStatementContext,
  SimpleDeclarationContext,
  StatementContext,
  StatementSeqContext,
  TranslationUnitContext,
} from "../grammar/CPP14Parser";
import { CPP14ParserVisitor } from "../grammar/CPP14ParserVisitor";
import { autoInjectable } from "tsyringe";
import ScopeTree, {
  ScopeNode,
} from "../source-code/data-flow-analisis/ScopeTree";
import PositionInFile from "../source-code/data-objects/PositionInFile";
import GrammarDerivation from "../source-code/data-objects/GrammarDerivation";
import CodeBlock from "../source-code/CodeBlock";
import DeclarationVar from "../source-code/data-objects/DeclarationVar";
import {
  CppTypes,
  KeyWords,
} from "../source-code/data-objects/LanguageKeyWords";

interface ConditionAndStatementContext {
  statement: StatementSeqContext;
  condition: ConditionContext;
}

@autoInjectable()
export default class DataFlowVisitor implements CPP14ParserVisitor<any> {
  private readonly scopeTree: ScopeTree;

  constructor(scopeTree?: ScopeTree) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.scopeTree = scopeTree!;
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
      return DataFlowVisitor.simpleDeclaration(ctx);
    } else {
      return null;
    }
  }

  visitParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): DeclarationVar | null {
    const rawType = ctx.declSpecifierSeq().declSpecifier(0).text.toUpperCase();
    const type = CppTypes[rawType as keyof typeof CppTypes];
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

  visitSelectionStatement(ctx: SelectionStatementContext): void {
    console.log(ctx.text);
  }

  private static simpleDeclaration(
    ctx: SimpleDeclarationContext
  ): DeclarationVar {
    const nodeVars =
      ctx
        .initDeclaratorList()
        ?.initDeclarator()
        .map((v) => v) ?? [];

    const lastDeclaredVar = nodeVars[nodeVars.length - 1];

    return DataFlowVisitor.createDeclaration(
      lastDeclaredVar.declarator(),
      lastDeclaredVar
        .initializer()
        ?.braceOrEqualInitializer()
        ?.initializerClause(),
      ctx.declSpecifierSeq()
    );
  }

  private static createDeclaration(
    dec: DeclaratorContext,
    init?: InitializerClauseContext,
    decSeq?: DeclSpecifierSeqContext
  ): DeclarationVar {
    const rawType = decSeq?.text.toUpperCase() ?? CppTypes.VOID;
    const type = CppTypes[rawType as keyof typeof CppTypes];

    const initInner = DataFlowVisitor.parseInitStatement(init?.text);

    return new DeclarationVar(
      dec.text,
      new GrammarDerivation(
        dec.start.startIndex,
        dec.start.stopIndex,
        dec.start.line,
        initInner
      ),
      type
    );
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
      if (result) {
        DataFlowVisitor.setScope(toNode, result);
      }
    }
  }

  private static conditionStatement(ctx: ConditionContext, toNode: ScopeNode) {
    const decSeq = ctx.declSpecifierSeq();
    const dec = ctx.declarator();
    const init = ctx.initializerClause();

    if (decSeq && dec && init) {
      const varDeclaration = DataFlowVisitor.createDeclaration(
        dec,
        init,
        decSeq
      );
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
      if (tmp) {
        this.scopeTree?.getRoot.data.declaredVariables.declare(
          tmp.variable,
          tmp.grammar,
          new PositionInFile(tmp.grammar.line, tmp.grammar.start)
        );
      }
    }
  }

  private functionStatement(functionDef: FunctionDefinitionContext) {
    const functionArgs =
      functionDef
        .declarator()
        .pointerDeclarator()
        ?.noPointerDeclarator()
        .parametersAndQualifiers()
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

  private ifElseStatement(
    ctx: SelectionStatementContext
  ): Array<ConditionAndStatementContext> {
    const result = new Array<ConditionAndStatementContext>();
    const statements = ctx.statement() ?? [];

    for (const s of statements) {
      const seq = s.compoundStatement()?.statementSeq();
      const elseStatement = s.selectionStatement();

      if (seq) {
        result.push({ statement: seq, condition: ctx.condition() });
      } else if (elseStatement) {
        const tmp = this.ifElseStatement(elseStatement);
        result.push(...tmp);
      }
    }

    return result;
  }

  private static loopStatement(
    ctx: IterationStatementContext
  ): StatementSeqContext | null {
    const statementSeq = ctx.statement().compoundStatement()?.statementSeq();

    return statementSeq ?? null;
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
          for (const s of this.ifElseStatement(ifElse)) {
            DataFlowVisitor.conditionStatement(s.condition, childNode);
            this.statementSequence(s.statement, childNode);
          }
        } else if (forLoop) {
          const statement = DataFlowVisitor.loopStatement(forLoop);
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

    this.scopeTree?.add(declare, toNode);
    return this.scopeTree?.find(declare);
  }

  private static parseInitStatement(text: string | undefined): string {
    return text ?? KeyWords.Null;
  }
}
