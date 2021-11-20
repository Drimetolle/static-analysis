import BasicBlock from "./BasicBlock";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { FunctionDefinitionContext } from "../../../grammar/CPP14Parser";
import { getOriginalTextFromAst } from "../../../utils/Utils";
import { TypeSpecifier } from "../../data-objects/LanguageKeyWords";

export default class FunctionBlock extends BasicBlock {
  get functionDeclaration(): any {
    const functionDeclaration = this.ast as FunctionDefinitionContext;
    const declarationSpecifiers = functionDeclaration.declSpecifierSeq();
    const functionDeclarator = functionDeclaration.declarator();

    return (
      getOriginalTextFromAst(declarationSpecifiers) +
      " " +
      getOriginalTextFromAst(functionDeclarator)
    );
  }
  get type(): TypeSpecifier | undefined {
    return this._type;
  }
  private readonly _type?: TypeSpecifier;

  constructor(
    scopeDepth: number,
    parserRuleContext: ParserRuleContext,
    type?: TypeSpecifier
  ) {
    super(scopeDepth, parserRuleContext);

    this._type = type;
  }
}
