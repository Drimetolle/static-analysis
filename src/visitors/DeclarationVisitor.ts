import { Lifecycle, scoped } from "tsyringe";
import {
  AssignmentExpressionContext,
  DeclaratorContext,
  DeclSpecifierContext,
  DeclSpecifierSeqContext,
  NoPointerDeclaratorContext,
  ParameterDeclarationContext,
  PointerDeclaratorContext,
  SimpleDeclarationContext,
  StorageClassSpecifierContext,
} from "../grammar/CPP14Parser";
import VariableDeclaration from "../source-analysis/data-objects/VariableDeclaration";
import { parseType } from "../utils/TypeInference";
import { DeclarationSpecifier } from "../source-analysis/data-objects/DeclarationSpecifier";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { DeclaratorSpecifier } from "../source-analysis/data-objects/DeclaratorSpecifier";

@scoped(Lifecycle.ContainerScoped)
export default class DeclarationVisitor {
  createDeclaration(
    declarator: DeclaratorContext,
    init?: AssignmentExpressionContext,
    decSeq?: DeclSpecifierSeqContext
  ): VariableDeclaration {
    const variable = this.getVariableNameFromDeclarator(
      declarator.pointerDeclarator()!
    ).text;
    const specifiers = [];
    const declarators = DeclarationVisitor.extractAllDeclaratorsFromDeclaration(
      declarator
    );
    if (decSeq) {
      specifiers.push(
        ...DeclarationVisitor.extractAllSpecifiersFromDeclaration(decSeq)
      );
    }

    const type = parseType(decSeq);
    return new VariableDeclaration(variable, decSeq!, init)
      .addSpecifier(...specifiers)
      .trySetSimpleType(type)
      .addDeclarator(...declarators);
  }

  private static createSimpleDeclaration(
    simpleDeclaration: SimpleDeclarationContext,
    decSeq: DeclSpecifierSeqContext
  ): VariableDeclaration {
    const variable = DeclarationVisitor.getVariableNameFromDeclarationSpecifier(
      decSeq.declSpecifier().pop()!
    ).text;
    const type = parseType(decSeq);

    const specifiers = DeclarationVisitor.extractAllSpecifiersFromDeclaration(
      decSeq
    );
    return new VariableDeclaration(variable, simpleDeclaration)
      .addSpecifier(...specifiers)
      .trySetSimpleType(type);
  }

  simpleDeclaration(ctx: SimpleDeclarationContext): Array<VariableDeclaration> {
    const nodeVars =
      ctx
        .initDeclaratorList()
        ?.initDeclarator()
        .map((v) => v) ?? [];
    const simpleDeclaration = ctx.declSpecifierSeq();

    if (nodeVars.length > 0) {
      return nodeVars.map((node) => {
        return this.createDeclaration(
          node.declarator(),
          node
            .initializer()
            ?.braceOrEqualInitializer()
            ?.initializerClause()
            ?.assignmentExpression(),
          ctx.declSpecifierSeq()
        );
      });
    } else if (simpleDeclaration) {
      // for example: class U;
      if (1 >= simpleDeclaration.childCount) {
        return [];
      }
      return new Array<VariableDeclaration>(
        DeclarationVisitor.createSimpleDeclaration(ctx, simpleDeclaration)
      );
    }

    return [];
  }

  visitParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): VariableDeclaration | null {
    const type = parseType(ctx.declSpecifierSeq());

    const declaration = this.createParameterDeclaration(ctx);

    if (type) {
      declaration.setSimpleType(type);
    }

    return declaration;
  }

  private createParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): VariableDeclaration {
    const declarationSpecifiers = ctx.declSpecifierSeq();
    const declarator = ctx.declarator();
    const specifiers = DeclarationVisitor.extractAllSpecifiersFromDeclaration(
      declarationSpecifiers
    );

    if (declarator) {
      const declarators = DeclarationVisitor.extractAllDeclaratorsFromDeclaration(
        declarator
      );
      return this.createDeclarator(ctx, declarator)
        .addSpecifier(...specifiers)
        .addDeclarator(...declarators);
    }

    const simpleDeclaration = declarationSpecifiers.declSpecifier().pop();

    return new VariableDeclaration(simpleDeclaration!.text, ctx);
  }

  private createDeclarator(
    parameterDeclaration: ParameterDeclarationContext,
    ctx: DeclaratorContext
  ) {
    const variableId = this.getVariableNameFromDeclarator(
      ctx.pointerDeclarator()!
    );
    return new VariableDeclaration(variableId.text, parameterDeclaration);
  }

  private getVariableNameFromDeclarator(
    ctx: PointerDeclaratorContext | NoPointerDeclaratorContext,
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

  private static getVariableNameFromDeclarationSpecifier(
    ctx: DeclSpecifierContext
  ): TerminalNode {
    return ctx
      .typeSpecifier()
      ?.trailingTypeSpecifier()
      ?.simpleTypeSpecifier()
      ?.theTypeName()
      ?.className()
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
      }
    }

    return result;
  }

  private static *extractAllDeclaratorsFromDeclaration(ctx: DeclaratorContext) {
    const declarators = ctx.pointerDeclarator()?.pointerOperator() ?? [];

    for (const declarator of declarators) {
      const star = declarator.Star();
      const ref = declarator.And();

      if (star) {
        yield DeclaratorSpecifier.Pointer;
      } else if (ref) {
        yield DeclaratorSpecifier.Ref;
      }
    }
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
}
