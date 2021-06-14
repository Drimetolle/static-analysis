import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import ScopeTree from "../../source-analysis/data-flow/ScopeTree";

export default class JsonFormatter {
  private constructor() {
    //
  }

  static ScopeToJson(tree: ScopeTree): string {
    return JSON.stringify(tree, this.replacerScope, 2);
  }

  static CFGToJson(cfg: BasicBlock): string {
    return JSON.stringify(cfg, this.replacerCFG, 2);
  }

  private static replacerCFG(key: string, value: unknown) {
    if (key == "condition") return undefined;
    else return value;
  }

  private static replacerScope(key: string, value: unknown) {
    if (key == "node") return undefined;
    else if (key == "parent") return undefined;
    else if (value instanceof Map) {
      return Object.fromEntries(value.entries());
    } else return value;
  }
}
