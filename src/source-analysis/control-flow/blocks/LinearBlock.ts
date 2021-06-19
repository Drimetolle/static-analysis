import BasicBlock from "./BasicBlock";

export default class LinearBlock extends BasicBlock {
  constructor(text: string, scopeDepth: number) {
    super(text, scopeDepth);
  }
}
