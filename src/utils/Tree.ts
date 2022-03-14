import VariableDeclaration from "../source-analysis/data-objects/VariableDeclaration";
import { ScopeNode } from "../source-analysis/data-flow/ScopeTree";

export class Node<T> {
  data: T;
  parent: Node<T> | null;
  children: Array<Node<T>>;
  level: number;

  constructor(data: T, level: number) {
    this.data = data;
    this.parent = null;
    this.children = [];
    this.level = level;
  }

  toString(): string {
    return `${this.data}`;
  }

  private traverseToRoot(
    startNode: Node<T>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (...args: Array<any>) => void
  ): void {
    let currentNode = startNode;

    callback(currentNode);

    while (currentNode.parent) {
      currentNode = currentNode.parent;
      callback(currentNode);
    }
  }

  getVariable(variableName: string): VariableDeclaration | null {
    let result = null;

    this.traverseToRoot(this, (node: ScopeNode) => {
      const tmp = node.data.declaredVariables.getVariable(variableName);

      if (tmp) {
        result = tmp;
      }
    });

    return result;
  }
}

export class Tree<T> {
  protected root: Node<T>;

  constructor(data: T) {
    this.root = new Node(data, 0);
  }

  add(data: T, toData: Node<T>): Node<T> | null {
    let parent = null;
    const callback = (node: Node<T>) => {
      if (this.defaultComparator(node.data, toData.data)) {
        parent = node;
      }
    };

    this.traverseDF(callback);

    if (parent) {
      const casted = parent as Node<T>;
      const child = new Node(data, casted.level + 1);
      casted.children.push(child);
      child.parent = parent;
      return child;
    } else {
      return null;
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

  protected defaultComparator(data1: T, data2: T): boolean {
    return data1 === data2;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  traverseDF(
    callback: (...args: Array<any>) => void,
    node: Node<T> = this.root
  ): void {
    (function recurse(currentNode: Node<T>) {
      for (let i = 0, length = currentNode.children.length; i < length; i++) {
        recurse(currentNode.children[i]);
      }
      callback(currentNode);
    })(node);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  traverseBF(callback: (...args: Array<any>) => void): void {
    const queue = [];

    queue.push(this.root);

    let currentTree = queue.slice(0, 1)[0];

    while (currentTree) {
      for (let i = 0, length = currentTree.children.length; i < length; i++) {
        queue.push(currentTree.children[i]);
      }

      callback(currentTree);
      currentTree = queue.slice(0, 1)[0];
    }
  }

  traverseToRoot(
    startNode: Node<T>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (...args: Array<any>) => void
  ): void {
    let currentNode = startNode;

    callback(currentNode);

    while (currentNode.parent) {
      currentNode = currentNode.parent;
      callback(currentNode);
    }
  }
}
