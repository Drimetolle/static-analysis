import BasicBlock from "./BasicBlock";

export default class LoopBlock extends BasicBlock {
  private readonly condition: any;

  hasNext(): boolean {
    return this.blocks[0] != null;
  }

  next(): BasicBlock {
    return this.blocks[0];
  }
}
