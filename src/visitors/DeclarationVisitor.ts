import { Lifecycle, scoped } from "tsyringe";
import {
  AssignmentExpressionContext,
  DeclaratorContext,
  DeclSpecifierContext,
  DeclSpecifierSeqContext,
  NoPointerDeclaratorContext,
  ParameterDeclarationContext,
  SimpleDeclarationContext,
} from "../grammar/CPP14Parser";
import DeclarationVar from "../source-analysis/data-objects/DeclarationVar";
import { parseType } from "../utils/TypeInference";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { CPP14ParserListener } from "../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

export interface DeclarationVarAndNode {
  declaration: DeclarationVar;
  node: ParserRuleContext;
}

/**
 * @example
 * void main() {
    auto a1;
    auto *a2;
    char a3[];
    char a4[123];
    char &a5;
    const char &a6;
    const char *a7;
    const char **a8;
    
    auto a9, a10;
    auto *a11, *a12;
    char a13[], a14[];
    char a15[123], a16[123];
    char &a17, &a18;
    const char &a19, &a20;
    const char *a21, *a22;
    const char **a23, **a24;
}
 */
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

  createSimpleDeclaration(
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
        declaration: this.createSimpleDeclaration(
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

  private static getVariableName(dec: ParserRuleContext): string {
    const variable = { name: "" };
    const printer = new GlobalVariableListener(variable);
    ParseTreeWalker.DEFAULT.walk(printer as ParseTreeListener, dec);

    return variable.name;
  }
}
