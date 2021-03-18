import {
  DeclSpecifierSeqContext,
  ParameterDeclarationContext,
} from "../grammar/CPP14Parser";
import MethodSignature from "../source-analysis/methods/MethodSignature";
import { parseSingleType, parseTypeFunction } from "../utils/TypeInference";

export function declareMethod(
  name: string,
  args: Array<ParameterDeclarationContext>,
  type: DeclSpecifierSeqContext
): MethodSignature {
  const cppType = parseSingleType(type);
  const argTypes = args.map((i) => parseTypeFunction(i.declSpecifierSeq()));

  return new MethodSignature(name, argTypes, cppType);
}
