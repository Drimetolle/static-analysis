import BasicBlock from "./BasicBlock";

export default class IfBlock extends BasicBlock {
  private readonly condition: any;

  constructor(text: string, scopeDepth: number, condition: any) {
    super(text, scopeDepth);
    this.condition = condition;
  }
}
