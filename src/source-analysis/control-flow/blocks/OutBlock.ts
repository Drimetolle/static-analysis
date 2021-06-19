import BasicBlock from "./BasicBlock";

export default class OutBlock extends BasicBlock {
  constructor(text: string, scopeDepth: number) {
    super(text, scopeDepth);
  }
}
