import { singleton } from "tsyringe";
import { Node, Tree } from "../../utils/Tree";
import CodeBlock from "../data-objects/CodeBlock";

export type ScopeNode = Node<CodeBlock>;

@singleton()
export default class ScopeTree extends Tree<CodeBlock> {
  get getRoot(): ScopeNode {
    return this.root;
  }

  constructor() {
    super(new CodeBlock(0));
  }

  toArray(): Array<ScopeNode> {
    const result = new Array<ScopeNode>();

    this.traverseDF((node: ScopeNode) => result.push(node));

    return result;
  }
}
