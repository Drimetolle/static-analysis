import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import ScopeTree from "../../source-analysis/data-flow/ScopeTree";
import DeclaredMethods from "../../source-analysis/methods/DeclaredMethods";

export type Information = {
  scope: ScopeTree;
  methods: DeclaredMethods;
};

export interface Walker {
  start(tree: ParserRuleContext): Promise<Information>;
}
