import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { Scope } from "../source-analysis/data-flow/ScopeTree";
import DeclaredMethods from "../source-analysis/methods/DeclaredMethods";

export default class LinterContext {
  fileName: string;
  readonly ast: ParserRuleContext;
  readonly scope: Scope;
  readonly methods: DeclaredMethods;

  constructor(
    fileName: string,
    ast: ParserRuleContext,
    scope: Scope,
    methods: DeclaredMethods
  ) {
    this.fileName = fileName;
    this.ast = ast;
    this.scope = scope;
    this.methods = methods;
  }
}
