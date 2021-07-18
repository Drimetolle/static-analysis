import BasicBlock from "./BasicBlock";

export default class SwitchBlock extends BasicBlock {
  private readonly condition: Array<any> | any;

  constructor(scopeDepth: number, condition: any);
  constructor(scopeDepth: number, condition: any, text: string);
  constructor(scopeDepth: number, condition: any, text?: string);
  constructor(scopeDepth: number, condition: any, text?: string) {
    super(scopeDepth, text);
    this.condition = condition;
  }
}
