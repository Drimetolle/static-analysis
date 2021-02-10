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

  private traverseDF(callback: (...args: Array<any>) => void) {
    (function recurse(currentNode: Node<T>) {
      for (let i = 0, length = currentNode.children.length; i < length; i++) {
        recurse(currentNode.children[i]);
      }
      callback(currentNode);
    })(this.root);
  }
}

@singleton()
export default class ScopeTree extends Tree<DeclaredVariables> {
  get getRoot(): Node<DeclaredVariables> {
    return this.root;
  }

  constructor() {
    super(new DeclaredVariables());
  }
}
