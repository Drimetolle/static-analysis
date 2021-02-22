import { FlowGraphNumeration } from "./data-objects/DiagnosticsInterfaceses";

export default class CodeBlock implements FlowGraphNumeration {
  post: number;
  pre: number;

  constructor(post: number);
  constructor(post: number, pre: number);
  constructor(post: number, pre?: number) {
    this.post = post;
    this.pre = pre ?? Infinity;
  }
}
