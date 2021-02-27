import {
  DeclSpecifierSeqContext,
  ParameterDeclarationContext,
} from "../grammar/CPP14Parser";
import MethodSignature from "../source-code/methods/MethodSignature";
import { parseSingleType } from "../utils/TypeInference";

export function declareMethod(
  name: string,
  args: Array<ParameterDeclarationContext>,
  type: DeclSpecifierSeqContext
): MethodSignature {
  const cppType = parseSingleType(type.declSpecifier(0));
  const argTypes = args.map((i) =>
    parseSingleType(i.declSpecifierSeq().declSpecifier(0))
  );

  return new MethodSignature(name, argTypes, cppType);
}
