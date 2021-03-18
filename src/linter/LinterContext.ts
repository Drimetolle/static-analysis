import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import ScopeTree from "../source-analysis/data-flow/ScopeTree";
import MethodsScope from "../source-analysis/methods/MethodsScope";

export default class LinterContext {
  fileName: string;
  private readonly ast: ParserRuleContext;
  private readonly scope: ScopeTree;
  private readonly methods: MethodsScope;

  constructor(
    fileName: string,
    ast: ParserRuleContext,
    scope: ScopeTree,
    methods: MethodsScope
  ) {
    this.fileName = fileName;
    this.ast = ast;
    this.scope = scope;
    this.methods = methods;
  }
}
