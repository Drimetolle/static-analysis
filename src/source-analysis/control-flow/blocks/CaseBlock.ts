import BasicBlock from "./BasicBlock";

export default class CaseBlock extends BasicBlock {
  private readonly condition: Array<any> | any;

  constructor(scopeDepth: number, condition: any);
  constructor(scopeDepth: number, condition: any, text: string);
  constructor(scopeDepth: number, condition: any, text?: string);
  constructor(scopeDepth: number, condition: any, text?: string) {
    super(scopeDepth, text);
    this.condition = condition;
  }

  public isSingleCondition() {
    return !Array.isArray(this.condition);
  }
}
