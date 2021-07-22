import BasicBlock from "../BasicBlock";

export default abstract class AbstractCaseBlock extends BasicBlock {
  protected constructor(scopeDepth: number);
  protected constructor(scopeDepth: number, text: string);
  protected constructor(scopeDepth: number, text?: string) {
    super(scopeDepth, text);
  }
}
