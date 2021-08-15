import { Lifecycle, scoped } from "tsyringe";
import {
  AssignmentExpressionContext,
  DeclaratorContext,
  DeclSpecifierContext,
  DeclSpecifierSeqContext,
  SimpleDeclarationContext,
} from "../grammar/CPP14Parser";
import DeclarationVar from "../source-analysis/data-objects/DeclarationVar";
import { parseType } from "../utils/TypeInference";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export interface DeclarationVarAndNode {
  declaration: DeclarationVar;
  node: ParserRuleContext;
}

@scoped(Lifecycle.ContainerScoped)
export default class DeclarationVisitor {
  createDeclaration(
    dec: DeclaratorContext,
    init?: AssignmentExpressionContext,
    decSeq?: DeclSpecifierSeqContext
  ): DeclarationVar {
    const type = parseType(decSeq);

    return new DeclarationVar(dec.text, type, init);
  }

  createSimpleDeclaration(
    dec: DeclSpecifierContext,
    decSeq: DeclSpecifierSeqContext
  ): DeclarationVar {
    const type = parseType(decSeq);

    return new DeclarationVar(dec.text, type);
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
}
