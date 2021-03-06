import { Node, Tree } from "../../utils/Tree";
import CodeBlock, { Block } from "../data-objects/CodeBlock";

export type ScopeNode = Node<CodeBlock>;

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

export class Scope extends Tree<Block> {
  get getRoot(): Node<Block> {
    return this.root;
  }

  toArray(): Array<Node<Block>> {
    const result = new Array<Node<Block>>();

    this.traverseDF((node: Node<Block>) => result.push(node));

    return result;
  }
}
