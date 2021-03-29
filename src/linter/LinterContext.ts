import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import ScopeTree from "../source-analysis/data-flow/ScopeTree";
import DeclaredMethods from "../source-analysis/methods/DeclaredMethods";

export default class LinterContext {
  fileName: string;
  readonly ast: ParserRuleContext;
  //TODO заменить на readonly тип DeclaredVariablesInScope (сделать интерфейс или зарефакторить)
  readonly scope: ScopeTree;
  readonly methods: DeclaredMethods;

  constructor(
    fileName: string,
    ast: ParserRuleContext,
    scope: ScopeTree,
    methods: DeclaredMethods
  ) {
    this.fileName = fileName;
    this.ast = ast;
    this.scope = scope;
    this.methods = methods;
  }
}
