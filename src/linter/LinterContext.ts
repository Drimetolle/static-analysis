import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import ScopeTree from "../source-analysis/data-flow/ScopeTree";
import DeclaredMethods from "../source-analysis/methods/DeclaredMethods";

export default class LinterContext {
  fileName: string;
  private readonly ast: ParserRuleContext;
  private readonly scope: ScopeTree;
  private readonly methods: DeclaredMethods;

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
