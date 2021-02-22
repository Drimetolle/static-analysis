import { FlowGraphNumeration } from "./data-objects/DiagnosticsInterfaceses";
import DeclaredVariablesInScope from "./DeclaredVariablesInScope";

export default class CodeBlock implements FlowGraphNumeration {
  post: number;
  pre: number;
  declaredVariables: DeclaredVariablesInScope;

  constructor(post: number);
  constructor(post: number, pre: number);
  constructor(
    post: number,
    pre: number,
    declaredVariables: DeclaredVariablesInScope
  );
  constructor(
    post: number,
    pre?: number,
    declaredVariables?: DeclaredVariablesInScope
  ) {
    this.post = post;
    this.pre = pre ?? Infinity;
    this.declaredVariables =
      declaredVariables ?? new DeclaredVariablesInScope();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toObject(): any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function mapToObj(map: Map<any, unknown>) {
      const obj = {};
      for (const [k, v] of map) {
        Object.assign(obj, { [k]: v });
      }
      return obj;
    }

    return {
      ...mapToObj(this.declaredVariables.variables),
      ...{ pre: this.pre, post: this.post },
    };
  }
}
