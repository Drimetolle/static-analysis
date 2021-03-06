export class Node<T> {
  data: T;
  parent: Node<T> | null;
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

  add(data: T, toData: Node<T>): Node<T> | null {
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
  traverseDF(callback: (...args: Array<any>) => void): void {
    (function recurse(currentNode: Node<T>) {
      for (let i = 0, length = currentNode.children.length; i < length; i++) {
        recurse(currentNode.children[i]);
      }
      callback(currentNode);
    })(this.root);
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
}
