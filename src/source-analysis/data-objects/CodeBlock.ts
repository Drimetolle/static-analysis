import { FlowGraphNumeration } from "./DiagnosticsInterfaceses";
import DeclaredVariablesInScope, {
  DeclaredVariables,
} from "../data-flow/DeclaredVariablesInScope";

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
}

export class Block implements FlowGraphNumeration {
  post!: number;
  pre!: number;
  declaredVariables!: DeclaredVariables;
}
