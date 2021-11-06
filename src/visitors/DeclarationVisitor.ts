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
    return new DeclarationVar(dec.text, variable ?? dec.text, type, init);
  }

  private static createSimpleDeclaration(
    dec: DeclSpecifierContext,
    decSeq: DeclSpecifierSeqContext
  ): DeclarationVar {
    const type = parseType(decSeq);

    return new DeclarationVar(dec.text, dec.text, type);
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
    const argumentByOther = ctx.declarator();

    this.createParameterDeclaration(ctx);

    if (argumentByOther) {
      const name = argumentByOther.pointerDeclarator()?.noPointerDeclarator()
        ?.text;

      return new DeclarationVar(name!, name!, type);
    }

    let argumentByValue;

    if (ctx.declSpecifierSeq().childCount > 1) {
      argumentByValue = ctx.declSpecifierSeq().declSpecifier(1).text;
    } else {
      argumentByValue = null;
    }

    if (argumentByValue) {
      return new DeclarationVar(argumentByValue, argumentByValue, type);
    }

    return null;
  }

  private createParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): Array<any> {
    const declarationSpecifiers = ctx.declSpecifierSeq();
    const declarator = ctx.declarator();

    DeclarationVisitor.extractAllSpecifiersFromDeclaration(
      declarationSpecifiers
    );

    if (declarator) {
      console.log(declarator.text);
    }

    return [];
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
