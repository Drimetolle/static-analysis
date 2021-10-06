import FunctionBlock from "../../source-analysis/control-flow/blocks/FunctionBlock";
import { FunctionDefinitionContext } from "../../grammar/CPP14Parser";

export function extractFunctionSignature(
  block: FunctionBlock
): FunctionDefinitionContext {
  const functionAst = block.ast as FunctionDefinitionContext;

  return functionAst!;
}
