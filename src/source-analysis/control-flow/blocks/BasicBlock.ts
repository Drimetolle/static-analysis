export default abstract class BasicBlock {
  public parent!: BasicBlock;
  public readonly text: string;
  public blocks: Array<BasicBlock>;
  public readonly scopeDepth: number;

  protected constructor(text: string, scopeDepth: number) {
    this.text = text;
    this.blocks = [];
    this.scopeDepth = scopeDepth;
  }

  public isLeaf(): boolean {
    return this.blocks.length == 0;
  }

  public createEdge(block: BasicBlock): void {
    this.blocks.push(block);
    block.parent = this;
  }

  protected get name(): string {
    return this.constructor.name;
  }

  public toJSON(): unknown {
    return {
      text: this.text,
      name: this.name,
      depth: this.scopeDepth,
      blocks: this.blocks,
    };
  }
  // http://www.ucw.cz/~hubicka/papers/proj/node18.html#:~:text=A%20control%20flow%20graph%20is,one%20basic%20block%20to%20another.
  //   https://www.geeksforgeeks.org/software-engineering-control-flow-graph-cfg/
}
