/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { CPP14ParserVisitor } from "../grammar/CPP14ParserVisitor";
import { Walker } from "../linter/walkers/Walker";
import {
  DeclarationseqContext,
  DeclSpecifierSeqContext,
  FunctionDefinitionContext,
  ParameterDeclarationContext,
  TranslationUnitContext,
} from "../grammar/CPP14Parser";
import DeclaredMethods from "../source-analysis/methods/DeclaredMethods";
import HeaderScope from "../source-analysis/methods/HeaderScope";
import MethodSignature, {
  MethodArgument,
} from "../source-analysis/methods/MethodSignature";
import { parseFunctionReturnType, parseType } from "../utils/TypeInference";
import FileManager from "../file-system/FileManager";
import Lexer from "../parsers/Lexer";
import Parser from "../parsers/Parser";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";

export default class MethodsVisitor
  implements CPP14ParserVisitor<any>, Walker<DeclaredMethods> {
  private readonly methods: DeclaredMethods;
  private readonly name: string;
  private readonly includePath: string;
  private readonly fileManager: FileManager;

  constructor(fileName: string, includePath: string) {
    this.name = fileName;
    this.methods = new DeclaredMethods([new HeaderScope(this.name)]);
    this.includePath = includePath;
    this.fileManager = new FileManager(includePath);
  }
  visit(tree: TranslationUnitContext): DeclaredMethods {
    const sequence = tree.declarationseq();
    if (sequence) {
      this.visitDeclarationseq(sequence);
    }
    return this.methods;
  }

  async visitDeclarationseq(ctx: DeclarationseqContext): Promise<any> {
    if (ctx.childCount > 0) {
      for (const i of ctx.declaration()) {
        const include = i.includeDefinition();
        const functionDef = i.functionDefinition();
        const functionDef1 = i.blockDeclaration();

        // console.log(functionDef1?.text);

        if (functionDef) {
          this.parseFunctionSignature(functionDef);
        } else if (include) {
          if (include.Include()) {
            const fileContent = await this.fileManager.findFile(
              include.fileName().text
            );

            const stream = new ANTLRInputStream(fileContent);

            const lexer = new Lexer(stream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new Parser(tokenStream);

            // const tree = parser.translationUnit();
            //
            // const a = new MethodsVisitor(
            //   include.fileName().text,
            //   this.includePath
            // );

            // const asd = await a.start(tree);

            // const af = 1;

            // console.log(
            //   (await a.start(tree)).getMethodSignature("stdio.h", "setbuf")
            // );

            // console.log(include?.fileName().text);
          } else if (include.IncludeQuote()) {
            // console.log(include?.fileName().text);
          }
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
      const signature = MethodsVisitor.declareMethod(
        functionName.text,
        functionArgs,
        functionType
      );

      this.methods.addMethodInScope(this.name, signature);
    }
  }

  private static declareMethod(
    name: string,
    args: Array<ParameterDeclarationContext>,
    type: DeclSpecifierSeqContext
  ): MethodSignature {
    const cppType = parseFunctionReturnType(type);
    const argsTmp = args.map((i) => {
      return {
        type: parseType(i.declSpecifierSeq()),
        pointers: i
          .declarator()
          ?.pointerDeclarator()
          ?.pointerOperator()
          .map((_) => _.text),
        const: i.declSpecifierSeq().declSpecifier(0)?.text,
      };
    });

    return new MethodSignature(
      name,
      argsTmp.map((t) => new MethodArgument(t.type, false, t.pointers)),
      cppType
    );
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
