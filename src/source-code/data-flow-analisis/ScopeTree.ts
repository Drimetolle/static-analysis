import DeclaredVariablesInScope from "../DeclaredVariablesInScope";
import { singleton } from "tsyringe";
import { Node, Tree } from "../../utils/Tree";

export type ScopeNode = Node<DeclaredVariablesInScope>;

@singleton()
export default class ScopeTree extends Tree<DeclaredVariablesInScope> {
  get getRoot(): ScopeNode {
    return this.root;
  }
  private i = 0;

  constructor() {
    super(new DeclaredVariablesInScope());
  }

  add(
    data: DeclaredVariablesInScope,
    toData: Node<DeclaredVariablesInScope>
  ): void {
    super.add(data, toData);
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
