import BasicBlock from "./BasicBlock";

export default class DefaultCaseBlock extends BasicBlock {
  constructor(scopeDepth: number);
  constructor(scopeDepth: number, text: string);
  constructor(scopeDepth: number, text?: string);
  constructor(scopeDepth: number, text?: string) {
    super(scopeDepth, text);
  }
}
