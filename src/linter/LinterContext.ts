import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import DeclaredMethods from "../source-analysis/methods/DeclaredMethods";
import ScopeTree from "../source-analysis/data-flow/ScopeTree";

export default class LinterContext {
  fileName: string;
  readonly ast: ParserRuleContext;
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
