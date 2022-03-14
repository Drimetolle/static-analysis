import BasicBlock from "./BasicBlock";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { FunctionDefinitionContext } from "../../../grammar/CPP14Parser";
import { getOriginalTextFromAst } from "../../../utils/Utils";
import { TypeSpecifier } from "../../data-objects/LanguageKeyWords";

export default class FunctionBlock extends BasicBlock {
  private readonly _type?: TypeSpecifier;

  get functionDeclaration(): string {
    const functionDeclaration = this.ast as FunctionDefinitionContext;
    const declarationSpecifiers = functionDeclaration.declSpecifierSeq();
    const functionDeclarator = functionDeclaration.declarator();

    return (
      getOriginalTextFromAst(declarationSpecifiers) +
      " " +
      getOriginalTextFromAst(functionDeclarator)
    );
  }

  get functionDeclarationNodes(): Array<ParserRuleContext> {
    const functionDeclaration = this.ast as FunctionDefinitionContext;
    const declarationSpecifiers = functionDeclaration.declSpecifierSeq();
    const functionDeclarator = functionDeclaration.declarator();

    return [declarationSpecifiers, functionDeclarator].filter(
      (node) => node != undefined
    ) as Array<ParserRuleContext>;
  }

  get type(): TypeSpecifier | undefined {
    return this._type;
  }

  constructor(
    scopeDepth: number,
    parserRuleContext: ParserRuleContext,
    type?: TypeSpecifier
  ) {
    super(scopeDepth, parserRuleContext);

    this._type = type;
  }
}
