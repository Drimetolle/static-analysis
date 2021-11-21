import { ScopeNode } from "../../data-flow/ScopeTree";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export default abstract class BasicBlock {
  public scope?: ScopeNode;
  public parent!: BasicBlock;
  public readonly ast: ParserRuleContext;
  public blocks: Array<BasicBlock>;
  public readonly scopeDepth: number;
  private readonly text: string;

  protected constructor(
    scopeDepth: number,
    parserRuleContext: ParserRuleContext
  ) {
    this.text = parserRuleContext?.text;
    this.blocks = [];
    this.scopeDepth = scopeDepth;
    this.ast = parserRuleContext;
  }

  protected get name(): string {
    return this.constructor.name;
  }

  public isLeaf(): boolean {
    return this.blocks.length == 0;
  }

  public createEdge(block: BasicBlock): void {
    this.blocks.push(block);
    block.parent = this;
  }

  public toJSON(): unknown {
    return {
      text: this.ast.text,
      name: this.name,
      depth: this.scopeDepth,
      blocks: this.blocks,
    };
  }

  // http://www.ucw.cz/~hubicka/papers/proj/node18.html#:~:text=A%20control%20flow%20graph%20is,one%20basic%20block%20to%20another.
  //   https://www.geeksforgeeks.org/software-engineering-control-flow-graph-cfg/
}
