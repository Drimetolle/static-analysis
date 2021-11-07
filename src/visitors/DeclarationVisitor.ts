import { Lifecycle, scoped } from "tsyringe";
import {
  AssignmentExpressionContext,
  DeclaratorContext,
  DeclSpecifierContext,
  DeclSpecifierSeqContext,
  NoPointerDeclaratorContext,
  ParameterDeclarationContext,
  SimpleDeclarationContext,
  StorageClassSpecifierContext,
} from "../grammar/CPP14Parser";
import DeclarationVar from "../source-analysis/data-objects/DeclarationVar";
import { parseType } from "../utils/TypeInference";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { CPP14ParserListener } from "../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { DeclarationSpecifier } from "../source-analysis/data-objects/DeclarationSpecifier";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export interface DeclarationVarAndNode {
  declaration: DeclarationVar;
  node: ParserRuleContext;
}

class GlobalVariableListener implements CPP14ParserListener {
  private variables;

  constructor(variables: { name: string }) {
    this.variables = variables;
  }

  enterNoPointerDeclarator(ctx: NoPointerDeclaratorContext) {
    this.variables.name = ctx.text;
  }
}

@scoped(Lifecycle.ContainerScoped)
export default class DeclarationVisitor {
  createDeclaration(
    dec: DeclaratorContext,
    init?: AssignmentExpressionContext,
    decSeq?: DeclSpecifierSeqContext
  ): DeclarationVar {
    const variable = DeclarationVisitor.getVariableName(dec);

    const type = parseType(decSeq);
    return new DeclarationVar(
      dec.text,
      variable ?? dec.text,
      init
    ).trySetSimpleType(type);
  }

  private static createSimpleDeclaration(
    dec: DeclSpecifierContext,
    decSeq: DeclSpecifierSeqContext
  ): DeclarationVar {
    const type = parseType(decSeq);

    return new DeclarationVar(dec.text, dec.text).trySetSimpleType(type);
  }

  simpleDeclaration(
    ctx: SimpleDeclarationContext
  ): Array<DeclarationVarAndNode> {
    const nodeVars =
      ctx
        .initDeclaratorList()
        ?.initDeclarator()
        .map((v) => v) ?? [];
    const simpleDeclaration = ctx.declSpecifierSeq();

    if (nodeVars.length > 0) {
      return nodeVars.map((node, i) => {
        return {
          declaration: this.createDeclaration(
            node.declarator(),
            node
              .initializer()
              ?.braceOrEqualInitializer()
              ?.initializerClause()
              ?.assignmentExpression(),
            ctx.declSpecifierSeq()
          ),
          node: nodeVars[i],
        };
      });
    } else if (simpleDeclaration) {
      // for example: class U;
      if (1 >= simpleDeclaration.childCount) {
        return [];
      }
      return new Array<DeclarationVarAndNode>({
        declaration: DeclarationVisitor.createSimpleDeclaration(
          simpleDeclaration?.declSpecifier(1),
          simpleDeclaration
        ),
        node: simpleDeclaration,
      });
    }

    return [];
  }

  visitParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): DeclarationVar | null {
    const type = parseType(ctx.declSpecifierSeq());

    const declaration = this.createParameterDeclaration(ctx);

    if (type) {
      declaration.setSimpleType(type);
    }

    return declaration;
  }

  private createParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): DeclarationVar {
    const declarationSpecifiers = ctx.declSpecifierSeq();
    const declarator = ctx.declarator();
    const specifiers = DeclarationVisitor.extractAllSpecifiersFromDeclaration(
      declarationSpecifiers
    );

    if (declarator) {
      return this.createDeclarator(declarator).addSpecifier(...specifiers);
    }

    const simpleDeclaration = declarationSpecifiers.declSpecifier().pop();

    return new DeclarationVar(simpleDeclaration!.text, simpleDeclaration!.text);
  }

  private createDeclarator(ctx: DeclaratorContext) {
    const variableId = this.getVariableNameFromDeclarator(
      ctx.pointerDeclarator()!
    );
    return new DeclarationVar(variableId.text, variableId.text);
  }

  private getVariableNameFromDeclarator(
    ctx: any,
    declarator: { noPointerDeclarator: NoPointerDeclaratorContext | null } = {
      noPointerDeclarator: null,
    }
  ): TerminalNode {
    const noPointerDeclarator = ctx.noPointerDeclarator();

    if (noPointerDeclarator) {
      declarator.noPointerDeclarator = noPointerDeclarator;
      this.getVariableNameFromDeclarator(noPointerDeclarator, declarator);
    }

    return declarator.noPointerDeclarator
      ?.declaratorid()
      ?.idExpression()
      ?.unqualifiedId()
      ?.Identifier()!;
  }

  private static extractAllSpecifiersFromDeclaration(
    ctx: DeclSpecifierSeqContext
  ): Array<DeclarationSpecifier> {
    const result = [];

    for (const specifier of ctx.declSpecifier()) {
      const classSpecifier = specifier.storageClassSpecifier();
      const typeSpecifier = specifier.typeSpecifier()?.trailingTypeSpecifier()!;

      if (classSpecifier) {
        const declarationSpecifier = DeclarationVisitor.convertClassSpecifier(
          classSpecifier
        );
        result.push(declarationSpecifier);
        continue;
      }

      if (typeSpecifier) {
        // TODO implement typeSpecifier
        continue;
      }
    }

    return result;
  }

  private static convertClassSpecifier(
    ctx: StorageClassSpecifierContext
  ): DeclarationSpecifier {
    if (ctx.Static()) {
      return DeclarationSpecifier.Static;
    } else if (ctx.Extern()) {
      return DeclarationSpecifier.Extern;
    } else if (ctx.Register()) {
      return DeclarationSpecifier.Extern;
    } else if (ctx.Thread_local()) {
      return DeclarationSpecifier.ThreadLocal;
    }

    throw new Error(`Unexpected specifier: ${ctx.text}`);
  }

  private static getVariableName(dec: ParserRuleContext): string {
    const variable = { name: "" };
    const printer = new GlobalVariableListener(variable);
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, dec);

    return variable.name;
  }
}
