import BasicBlock from "./BasicBlock";

export default class StubBlock extends BasicBlock {
  public parent!: BasicBlock;

  constructor(text: string) {
    super(text);
  }
}
