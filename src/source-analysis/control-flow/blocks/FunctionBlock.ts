import BasicBlock from "./BasicBlock";

export default class FunctionBlock extends BasicBlock {
  constructor(text: string, scopeDepth: number) {
    super(text, scopeDepth);
  }
}
