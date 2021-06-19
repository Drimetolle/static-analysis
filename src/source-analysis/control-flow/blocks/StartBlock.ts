import BasicBlock from "./BasicBlock";

export default class StartBlock extends BasicBlock {
  constructor(text: string, scopeDepth: number) {
    super(text, scopeDepth);
  }
}
