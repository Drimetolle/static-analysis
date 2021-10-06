import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import DeclaredMethods from "../source-analysis/methods/DeclaredMethods";
import ScopeTree from "../source-analysis/data-flow/ScopeTree";
import StartBlock from "../source-analysis/control-flow/blocks/StartBlock";

export default class LinterContext {
  fileName: string;
  readonly ast: ParserRuleContext;
  readonly scope: ScopeTree;
  readonly cfg: StartBlock;
  readonly methods: DeclaredMethods;

  constructor(
    fileName: string,
    ast: ParserRuleContext,
    scope: ScopeTree,
    cfg: StartBlock,
    methods: DeclaredMethods
  ) {
    this.fileName = fileName;
    this.ast = ast;
    this.scope = scope;
    this.cfg = cfg;
    this.methods = methods;
  }
}
