import LinterContext from "../src/linter/LinterContext";
import ASTGenerator from "./ASTGenerator";
import ScopeTree from "../src/source-analysis/data-flow/ScopeTree";
import StartBlock from "../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../src/source-analysis/methods/DeclaredMethods";

export function createContextWithAst(code: string) {
  return new LinterContext(
    "",
    ASTGenerator.fromString(code),
    new ScopeTree(),
    new StartBlock(0, undefined as any),
    new DeclaredMethods([])
  );
}
