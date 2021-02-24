import { singleton } from "tsyringe";
import { Node, Tree } from "../../utils/Tree";
import CodeBlock from "../CodeBlock";

export type ScopeNode = Node<CodeBlock>;

@singleton()
export default class ScopeTree extends Tree<CodeBlock> {
  get getRoot(): ScopeNode {
    return this.root;
  }

  constructor() {
    super(new CodeBlock(0));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private convertNodeToString(node: ScopeNode): any {
    return {
      data: node.data.toObject(),
      children: node.children.map((i) => this.convertNodeToString(i)),
    };
  }

  toString(): string {
    return JSON.stringify(this.convertNodeToString(this.root));
  }
}
