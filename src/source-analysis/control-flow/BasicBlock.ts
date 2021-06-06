export default abstract class BasicBlock {
  protected blocks: Array<BasicBlock>;

  protected constructor(blocks: Array<BasicBlock>) {
    this.blocks = blocks;
  }

  public abstract next(): BasicBlock;
  public abstract hasNext(): boolean;

  public isLeaf(): boolean {
    return this.blocks.length == 0;
  }

  public createEdge(block: BasicBlock): void {
    this.blocks.push(block);
  }
  // http://www.ucw.cz/~hubicka/papers/proj/node18.html#:~:text=A%20control%20flow%20graph%20is,one%20basic%20block%20to%20another.
  //   https://www.geeksforgeeks.org/software-engineering-control-flow-graph-cfg/
}
