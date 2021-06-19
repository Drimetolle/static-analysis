import BasicBlock from "./blocks/BasicBlock";
import StubBlock from "./blocks/StubBlock";
import JsonFormatter from "../../utils/json-formatters/JsonFormatter";
import IfBlock from "./blocks/IfBlock";
import OutBlock from "./blocks/OutBlock";
import LoopBlock from "./blocks/LoopBlock";

export default class CFGValidator {
  private readonly outBlock: OutBlock;

  constructor() {
    this.outBlock = new OutBlock("", 0);
  }

  public validate(block: BasicBlock): BasicBlock {
    this.removeStubBlocks(block);

    console.log(JsonFormatter.CFGToJson(block));
    return block;
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
    return block instanceof IfBlock || block instanceof LoopBlock;
  }

  private removeStubBlocks(block: BasicBlock): BasicBlock {
    for (const b of block.blocks) {
      this.mergeBlock(b);

      if (b.isLeaf() && !(b instanceof OutBlock)) {
        b.createEdge(
          CFGValidator.getNextBlockForLastBlockInScope(b) ?? this.outBlock
        );
      }

      this.removeStubBlocks(b);
    }

    return block;
  }

  private mergeBlock(block: BasicBlock) {
    const stub = CFGValidator.findStub(block);

    if (stub >= 0 && !block.blocks[stub].isLeaf()) {
      // У stub всегда только 1 потомок.
      block.blocks[stub] = block.blocks[stub].blocks[0];
    } else if (stub >= 0 && block.blocks[stub].isLeaf()) {
      block.blocks[stub] =
        CFGValidator.getNextBlockForLastBlockInScope(block.blocks[stub]) ??
        this.outBlock;
    }
  }

  private static findStub(block: BasicBlock): number {
    return block.blocks.findIndex((b) => b instanceof StubBlock);
  }
}
