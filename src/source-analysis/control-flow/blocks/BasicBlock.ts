export default abstract class BasicBlock {
  public readonly text: string;
  public blocks: Array<BasicBlock>;

  protected constructor(text: string) {
    this.text = text;
    this.blocks = [];
  }

  public isLeaf(): boolean {
    return this.blocks.length == 0;
  }

  public createEdge(block: BasicBlock): void {
    this.blocks.push(block);
  }

  protected get name(): string {
    return this.constructor.name;
  }

  public toJSON(): unknown {
    return {
      text: this.text,
      name: this.name,
      blocks: this.blocks,
    };
  }
  // http://www.ucw.cz/~hubicka/papers/proj/node18.html#:~:text=A%20control%20flow%20graph%20is,one%20basic%20block%20to%20another.
  //   https://www.geeksforgeeks.org/software-engineering-control-flow-graph-cfg/
}
