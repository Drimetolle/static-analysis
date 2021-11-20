import "reflect-metadata";
import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";
import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import DataFlowWalker from "../../src/visitors/DataFlowWalker";
import ConditionVisitor from "../../src/visitors/ConditionVisitor";
import BlockVisitor from "../../src/visitors/BlockVisitor";
import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import ANTLRExpressionConverter from "../../src/source-analysis/expression/ANTLRExpressionConverter";
import ReturnForNotVoidFunction from "../../src/rules/functions/ReturnForNotVoidFunction";

describe("Tests for rule ReturnForNotVoidFunction", () => {
  const createContext = async (code: string) => {
    const ast = ASTGenerator.fromString(code);
    const { cfg } = await new DataFlowWalker(
      "",
      new ConditionVisitor(new BlockVisitor()),
      new DeclarationVisitor(),
      new ANTLRExpressionConverter()
    ).start(ast);

    return new LinterContext(
      "main.cpp",
      ast,
      new ScopeTree(),
      cfg,
      new DeclaredMethods([])
    );
  };
  const rule = new ReturnForNotVoidFunction();

  test.each([
    [`int main() { return 1; }`, undefined],
    [`int main() { return; }`, "intmain(){return;}"],
    [`int main() {}`, "intmain(){}"],
    [`SomeType main() { return var; }`, undefined],
    [`void main() {}`, undefined],
    [`void main() { return; }`, undefined],
    [`void main() { return 1; }`, undefined],
    // TODO no function type specified
    // [`main() {}`, undefined],
  ])("Check return statement in non void function", async (code, expected) => {
    const result = rule.run(await createContext(code));

    expect(result.pop()?.node.text).toBe(expected);
  });
});
