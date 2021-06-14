import BasicBlock from "./BasicBlock";

export default class IfBlock extends BasicBlock {
  private readonly condition: any;

  constructor(text: string, condition: any) {
    super(text);
    this.condition = condition;
  }
}
