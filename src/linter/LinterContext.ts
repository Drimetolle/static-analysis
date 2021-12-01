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
  private _config?: any;

  getConfig<TConfig>(): TConfig {
    return this._config;
  }

  set config(value: any) {
    this._config ??= value;
  }

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
