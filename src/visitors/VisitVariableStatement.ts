import {
  DeclaratorContext,
  DeclSpecifierSeqContext,
  InitializerClauseContext,
  SimpleDeclarationContext,
} from "../grammar/CPP14Parser";
import DeclarationVar from "../source-analysis/data-objects/DeclarationVar";
import { TypeSpecifier } from "../source-analysis/data-objects/LanguageKeyWords";
import GrammarDerivation from "../source-analysis/data-objects/GrammarDerivation";
import { parseType } from "../utils/TypeInference";
import defaultValueByType from "../utils/DefaultValues";
import { DeclarationVarAndNode } from "./DataFlowVisitor";

export function createDeclaration(
  dec: DeclaratorContext,
  init?: InitializerClauseContext,
  decSeq?: DeclSpecifierSeqContext
): DeclarationVar {
  const type = parseType(decSeq);
  const initInner = parseInitStatement(init?.text, type);

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

export function simpleDeclaration(
  ctx: SimpleDeclarationContext
): Array<DeclarationVarAndNode> {
  const nodeVars =
    ctx
      .initDeclaratorList()
      ?.initDeclarator()
      .map((v) => v) ?? [];

  return nodeVars.map((node, i) => {
    return {
      declaration: createDeclaration(
        node.declarator(),
        node.initializer()?.braceOrEqualInitializer()?.initializerClause(),
        ctx.declSpecifierSeq()
      ),
      node: nodeVars[i],
    };
  });
}

export function parseInitStatement(
  text: string | undefined,
  type: TypeSpecifier
): string {
  return text ?? defaultValueByType(type);
}
