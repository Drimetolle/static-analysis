import BasicBlock from "./blocks/BasicBlock";
import StubBlock from "./blocks/StubBlock";
import IfBlock from "./blocks/IfBlock";
import OutBlock from "./blocks/OutBlock";
import LoopBlock from "./blocks/LoopBlock";
import FunctionBlock from "./blocks/FunctionBlock";
import JsonFormatter from "../../utils/json-formatters/JsonFormatter";
import ReturnBlock from "./blocks/ReturnBlock";
import AbstractCaseBlock from "./blocks/switch/AbstractCaseBlock";

export default class CFGValidator {
  private readonly outBlock: OutBlock;

  constructor(outBlock: OutBlock) {
    this.outBlock = outBlock;
  }

  /**
   * Mutate input block. Validate cfg.
   */
  public validateFunction(block: FunctionBlock): BasicBlock {
    this.removeStubBlocks(block);
    this.setOutBlock(block);
    //TODO need set selfRef for loop block
    this.changeFlowWhitReturnOperator(block);

    // console.log(JsonFormatter.CFGToJson(block));
    return block;
  }

  private removeStubBlocks(block: BasicBlock): void {
    for (const b of block.blocks) {
      const stub = CFGValidator.findIndexStub(b);

      if (stub >= 0 && !b.blocks[stub].isLeaf()) {
        // У stub всегда только 1 потомок.
        b.blocks[stub] = b.blocks[stub].blocks[0];
      } else if (stub >= 0 && b.blocks[stub].isLeaf()) {
        b.blocks[stub] =
          CFGValidator.getNextBlockForLastBlockInScope(b.blocks[stub]) ??
          this.outBlock;
      }

      this.removeStubBlocks(b);
    }
  }

  private setOutBlock(block: BasicBlock): void {
    block.blocks.forEach((b) => {
      if (b.isLeaf() && !(b instanceof OutBlock)) {
        b.createEdge(
          CFGValidator.getNextBlockForLastBlockInScope(b) ?? this.outBlock
        );
      }

      this.setOutBlock(b);
    });
  }

  private changeFlowWhitReturnOperator(startBlock: BasicBlock): void {
    for (const block of startBlock.blocks) {
      if (block instanceof ReturnBlock) {
        block.parent.blocks = [block];
        block.blocks = [this.outBlock];
      }

      this.changeFlowWhitReturnOperator(block);
    }
  }

  private static getNextBlockForLastBlockInScope(
    block: BasicBlock
  ): BasicBlock | null {
    let previousBlock = block;
    let nextBlock = block.parent;

    while (nextBlock != null) {
      if (
        CFGValidator.isFlowBlock(nextBlock) &&
        nextBlock.scopeDepth < previousBlock.scopeDepth &&
        !(nextBlock.blocks[0] instanceof StubBlock)
      ) {
        return nextBlock.blocks[0];
      }

      previousBlock = nextBlock;
      nextBlock = nextBlock.parent;
    }

    return null;
  }

  private static isFlowBlock(block: BasicBlock) {
    return (
      block instanceof IfBlock ||
      block instanceof LoopBlock ||
      block instanceof AbstractCaseBlock
    );
  }

  private static findIndexStub(block: BasicBlock): number {
    return block.blocks.findIndex((b) => b instanceof StubBlock);
  }
}
