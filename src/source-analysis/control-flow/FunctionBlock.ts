import BasicBlock from "./BasicBlock";

export default class FunctionBlock extends BasicBlock {
  constructor() {
    super([]);
  }

  hasNext(): boolean {
    return this.blocks[0] != null;
  }

  next(): BasicBlock {
    return this.blocks[0];
  }
}
