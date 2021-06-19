import BasicBlock from "./BasicBlock";

export default class StubBlock extends BasicBlock {
  constructor(text: string, scopeDepth: number) {
    super(text, scopeDepth);
  }
}
