import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import ScopeTree from "../../source-analysis/data-flow/ScopeTree";
import { DeclaredVariables } from "../../source-analysis/data-flow/DeclaredVariablesInScope";

export default class VariableFinder {
  public static getFromNode(
    node: ParserRuleContext,
    variables: ScopeTree
  ): DeclaredVariables {
    // let minDepth = 0;
    const allNodes = variables.toArray().map((node) => {
      return { depth: node.level, vars: node.data.declaredVariables.variables };
    });
    const upper = node.start.startIndex;
    const lower = node.stop?.stopIndex ?? upper;

    const scope = allNodes.map((node) =>
      node.vars.filter((v) => upper >= v.blockId && lower <= v.blockId)
    );

    // console.log(
    //   upper,
    //   lower,
    //   allNodes.map((_) => _.vars.map((v) => v.blockId))
    // );
    return null as any;
  }
}
