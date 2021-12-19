import { Lifecycle, scoped } from "tsyringe";
import {
  AssignmentExpressionContext,
  CvQualifierContext,
  DeclaratorContext,
  DeclSpecifierContext,
  DeclSpecifierSeqContext,
  InitDeclaratorContext,
  MemberdeclarationContext,
  NoPointerDeclaratorContext,
  ParameterDeclarationContext,
  PointerDeclaratorContext,
  SimpleDeclarationContext,
  StorageClassSpecifierContext,
} from "../grammar/CPP14Parser";
import VariableDeclaration from "../source-analysis/data-objects/VariableDeclaration";
import { parseSimpleType } from "../types/TypeInference";
import { DeclarationSpecifier } from "../source-analysis/data-objects/DeclarationSpecifier";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { DeclaratorSpecifier } from "../source-analysis/data-objects/DeclaratorSpecifier";
import { MemberDeclaration } from "../types/Type";

@scoped(Lifecycle.ContainerScoped)
export default class DeclarationVisitor {
  public createDeclaration(
    declarator: DeclaratorContext,
    init?: AssignmentExpressionContext,
    decSeq?: DeclSpecifierSeqContext,
    simpleDeclaration?: SimpleDeclarationContext
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

    const type = parseSimpleType(decSeq);
    return new VariableDeclaration(
      variable,
      simpleDeclaration ?? DeclarationVisitor.getInitDeclarator(declarator),
      init
    )
      .addSpecifier(...specifiers)
      .trySetSimpleType(type)
      .addDeclarator(...declarators);
  }

  public simpleDeclaration(
    ctx: SimpleDeclarationContext
  ): Array<VariableDeclaration> {
    const nodeVars =
      ctx
        .initDeclaratorList()
        ?.initDeclarator()
        .map((v) => v) ?? [];
    const simpleDeclaration = ctx.declSpecifierSeq();

    if (nodeVars.length == 1) {
      const node = nodeVars.pop()!;
      return [
        this.createDeclaration(
          node.declarator(),
          node
            .initializer()
            ?.braceOrEqualInitializer()
            ?.initializerClause()
            ?.assignmentExpression(),
          ctx.declSpecifierSeq(),
          ctx
        ),
      ];
    } else if (nodeVars.length > 0) {
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

      const result = new Array<VariableDeclaration>();
      const declaration = DeclarationVisitor.createSimpleDeclaration(
        ctx,
        simpleDeclaration
      );
      if (declaration) {
        result.push(declaration);
      }
      return result;
    }

    return [];
  }

  public memberDeclaration(
    memberDeclaration: MemberdeclarationContext
  ): Array<MemberDeclaration> {
    const isSimpleDeclaration = memberDeclaration.memberDeclaratorList();

    if (!isSimpleDeclaration) {
      const declarationSpecifiersSequence = memberDeclaration.declSpecifierSeq();
      const declarationSpecifiers =
        declarationSpecifiersSequence?.declSpecifier() ?? [];
      const variableName = declarationSpecifiers.pop()!;

      const specifiers = DeclarationVisitor.extractAllSpecifiersFromDeclaration(
        memberDeclaration.declSpecifierSeq()!
      );

      const variable = DeclarationVisitor.getVariableNameFromDeclarationSpecifier(
        variableName
      );

      const type = parseSimpleType(declarationSpecifiersSequence);

      return [
        {
          identifier: variable.text,
          simpleType: type,
          memberDeclaration,
          declarationSpecifiers: specifiers,
        },
      ];
    }

    return [];
  }

  private static getInitDeclarator(
    declarator: DeclaratorContext
  ): DeclaratorContext | InitDeclaratorContext {
    const init = declarator.parent;

    return (init as InitDeclaratorContext) ?? declarator;
  }

  private static createSimpleDeclaration(
    simpleDeclaration: SimpleDeclarationContext,
    decSeq: DeclSpecifierSeqContext
  ): VariableDeclaration | null {
    const declarationSpecifier = decSeq.declSpecifier().pop()!;

    /* For this declarations:
    typedef struct point{
      double x, y;
    };
    */
    // TODO now ignore
    if (
      declarationSpecifier?.typeSpecifier()?.classSpecifier()?.classHead().text
    ) {
      return null;
    }

    const variable = DeclarationVisitor.getVariableNameFromDeclarationSpecifier(
      declarationSpecifier
    ).text;

    const type = parseSimpleType(decSeq);

    const specifiers = DeclarationVisitor.extractAllSpecifiersFromDeclaration(
      decSeq
    );

    return new VariableDeclaration(variable, simpleDeclaration)
      .addSpecifier(...specifiers)
      .trySetSimpleType(type);
  }

  visitParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): VariableDeclaration | null {
    const type = parseSimpleType(ctx.declSpecifierSeq());

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
        .addDeclarator(...declarators)
        .changeToParameter();
    }

    const simpleDeclaration = declarationSpecifiers.declSpecifier().pop();

    return new VariableDeclaration(simpleDeclaration!.text, ctx)
      .addSpecifier(...specifiers)
      .changeToParameter();
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
        const cvQualifier = typeSpecifier.cvQualifier();

        if (cvQualifier) {
          result.push(DeclarationVisitor.convertCvQualifier(cvQualifier));
        }
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

  private static convertCvQualifier(
    ctx: CvQualifierContext
  ): DeclarationSpecifier {
    if (ctx.Const()) {
      return DeclarationSpecifier.Const;
    } else if (ctx.Volatile()) {
      return DeclarationSpecifier.Volatile;
    }

    throw new Error(`Unexpected specifier: ${ctx.text}`);
  }
}
