import { Lifecycle, scoped } from "tsyringe";
import {
  AssignmentExpressionContext,
  DeclaratorContext,
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

  simpleDeclaration(
    ctx: SimpleDeclarationContext
  ): Array<DeclarationVarAndNode> {
    const nodeVars =
      ctx
        .initDeclaratorList()
        ?.initDeclarator()
        .map((v) => v) ?? [];

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
  }
}
