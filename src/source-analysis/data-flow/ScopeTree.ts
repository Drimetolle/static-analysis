import { Node, Tree } from "../../utils/Tree";
import CodeBlock from "../data-objects/CodeBlock";

export type ScopeNode = Node<CodeBlock>;

export default class ScopeTree extends Tree<CodeBlock> {
  get getRoot(): ScopeNode {
    return this.root;
  }

  constructor() {
    super(new CodeBlock());
  }

  toArray(): Array<ScopeNode> {
    const result = new Array<ScopeNode>();

    this.traverseDF((node: ScopeNode) => result.push(node));

    return result;
  }

  isDefined(variableNode: Node<CodeBlock>, variableName: string): boolean {
    let result = false;

    this.traverseToRoot(variableNode, (node: ScopeNode) => {
      const tmp = node.data.declaredVariables.getVariable(variableName);

      if (tmp) {
        if (tmp.variable.isDefined()) {
          result = true;
        }
      }
    });

    return result;
  }
}
