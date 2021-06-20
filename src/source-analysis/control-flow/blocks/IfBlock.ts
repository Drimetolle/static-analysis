import BasicBlock from "./BasicBlock";

export default class IfBlock extends BasicBlock {
  private readonly condition: any;

  constructor(scopeDepth: number, condition: any);
  constructor(scopeDepth: number, condition: any, text: string);
  constructor(scopeDepth: number, condition: any, text?: string);
  constructor(scopeDepth: number, condition: any, text?: string) {
    super(scopeDepth, text);
    this.condition = condition;
  }
}
