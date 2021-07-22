import AbstractCaseBlock from "./AbstractCaseBlock";

export default class CaseBlock extends AbstractCaseBlock {
  private readonly condition: Array<any> | any;

  constructor(scopeDepth: number, condition: any);
  constructor(scopeDepth: number, condition: any, text: string);
  constructor(scopeDepth: number, condition: any, text?: string);
  constructor(scopeDepth: number, condition: any, text = "") {
    super(scopeDepth, text);
    this.condition = condition;
  }

  public isSingleCondition() {
    return !Array.isArray(this.condition);
  }
}
