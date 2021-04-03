/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { CPP14ParserVisitor } from "../grammar/CPP14ParserVisitor";
import { Walker } from "../linter/walkers/Walker";
import {
  DeclarationContext,
  DeclarationseqContext,
  FunctionDefinitionContext,
  TranslationUnitContext,
} from "../grammar/CPP14Parser";
import DeclaredMethods from "../source-analysis/methods/DeclaredMethods";
import { declareMethod } from "./VisitFunctionStatment";
import HeaderScope from "../source-analysis/methods/HeaderScope";

export default class MethodsVisitor
  implements CPP14ParserVisitor<any>, Walker<DeclaredMethods> {
  private readonly methods: DeclaredMethods;
  private readonly name: string;

  constructor(fileName: string) {
    this.name = fileName;
    this.methods = new DeclaredMethods([new HeaderScope(this.name)]);
  }
  visit(tree: TranslationUnitContext): DeclaredMethods {
    const sequence = tree.declarationseq();
    if (sequence) {
      this.visitDeclarationseq(sequence);
    }
    return this.methods;
  }

  visitDeclarationseq(ctx: DeclarationseqContext): any {
    if (ctx.children) {
      for (const i of ctx.children) {
        const functionDef = (i as DeclarationContext).functionDefinition();
        if (functionDef) {
          this.parseFunctionSignature(functionDef);
        }
      }
    }
  }

  private parseFunctionSignature(functionDef: FunctionDefinitionContext) {
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

  async start(tree: TranslationUnitContext): Promise<DeclaredMethods> {
    return this.visit(tree);
  }
}
