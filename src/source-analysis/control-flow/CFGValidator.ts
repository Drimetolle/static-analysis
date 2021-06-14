import BasicBlock from "./blocks/BasicBlock";
import StubBlock from "./blocks/StubBlock";
import JsonFormatter from "../../utils/json-formatters/JsonFormatter";
import IfBlock from "./blocks/IfBlock";
import OutBlock from "./blocks/OutBlock";

export default class CFGValidator {
  private readonly outBlock: OutBlock;

  constructor() {
    this.outBlock = new OutBlock("");
  }

  public validate(block: BasicBlock): BasicBlock {
    const dictionary = new Map<BasicBlock, BasicBlock>();

    const blocksWithoutStub = this.removeStubBlocks(block);
    const result = this.setOutBlocks(
      blocksWithoutStub,
      this.outBlock,
      dictionary
    );
    // console.log(1);
    console.log(JsonFormatter.CFGToJson(block));
    return result;
  }

  private setOutBlocks(
    block: BasicBlock,
    out: BasicBlock,
    map: Map<BasicBlock, BasicBlock>
  ): BasicBlock {
    if (block instanceof IfBlock) {
      if (block.blocks[0]) {
        out = block.blocks[0] ?? out;
        map.set(block, out);
      }
    }

    for (const b of block.blocks) {
      if (b.isLeaf() && !(b instanceof OutBlock)) {
        const parent = CFGValidator.findBlock(Array.from(map.keys()), b);

        if (block.blocks.indexOf(b) == block.blocks.length - 1) {
          b.createEdge(block.blocks[0]);
        } else {
          b.createEdge(map.get(parent)!);
        }
      }

      this.setOutBlocks(b, out, map);
    }

    return block;
  }

  private static findBlock(
    blocks: Array<BasicBlock>,
    block: BasicBlock
  ): BasicBlock {
    for (const b of blocks) {
      if (b == block) {
        return b;
      }

      return b;
    }

    throw new Error("Block not find");
  }

  private removeStubBlocks(block: BasicBlock): BasicBlock {
    for (const b of block.blocks) {
      if (b instanceof IfBlock) {
        // Первый потомок блока if всегда выходной.
        this.mergeBlock(b);
      }

      this.removeStubBlocks(b);
    }

    return block;
  }

  private static findStub(block: BasicBlock): number {
    return block.blocks.findIndex((b) => b instanceof StubBlock);
  }

  private mergeBlock(block: IfBlock) {
    const stub = CFGValidator.findStub(block);

    if (stub >= 0 && !block.blocks[stub].isLeaf()) {
      // У stub всегда только 1 потомок.
      block.blocks[stub] = block.blocks[stub].blocks[0];
    } else if (stub >= 0 && block.blocks[stub].isLeaf()) {
      block.blocks[stub] = this.outBlock;
    }
  }
}
