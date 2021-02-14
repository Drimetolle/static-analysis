import DeclaredVariables from "../source-code/DeclaredVariables";
import { singleton } from "tsyringe";

export class Node<T> {
  data: T;
  parent: T | null;
  children: Array<Node<T>>;

  constructor(data: T) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  toString(): string {
    return `${this.data}`;
  }
}

export class Tree<T> {
  protected root: Node<T>;

  constructor(data: T) {
    this.root = new Node(data);
  }

  add(data: T, toData: Node<T>): void {
    let parent = null;
    const callback = (node: Node<T>) => {
      if (this.defaultComparator(node.data, toData.data)) {
        parent = node;
      }
    };

    this.traverseDF(callback);

    if (parent) {
      const child = new Node(data);
      (parent as Node<T>).children.push(child);
      child.parent = parent;
    }
  }

  find(data: T): Node<T> | null {
    let parent = null;
    const callback = (node: Node<T>) => {
      if (this.defaultComparator(node.data, data)) {
        parent = node;
      }
    };

    this.traverseDF(callback);

    return parent;
  }

  private defaultComparator(data1: T, data2: T): boolean {
    return data1 === data2;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private traverseDF(callback: (...args: Array<any>) => void) {
    (function recurse(currentNode: Node<T>) {
      for (let i = 0, length = currentNode.children.length; i < length; i++) {
        recurse(currentNode.children[i]);
      }
      callback(currentNode);
    })(this.root);
  }
}

export type ScopeNode = Node<DeclaredVariables>;

@singleton()
export default class ScopeTree extends Tree<DeclaredVariables> {
  get getRoot(): ScopeNode {
    return this.root;
  }

  constructor() {
    super(new DeclaredVariables());
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
