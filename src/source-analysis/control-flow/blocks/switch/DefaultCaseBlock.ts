import AbstractCaseBlock from "./AbstractCaseBlock";

export default class DefaultCaseBlock extends AbstractCaseBlock {
  constructor(scopeDepth: number);
  constructor(scopeDepth: number, text: string);
  constructor(scopeDepth: number, text?: string);
  constructor(scopeDepth: number, text = "") {
    super(scopeDepth, text);
  }
}
