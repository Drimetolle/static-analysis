import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";
import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import UseConstInsteadMacro from "../../src/rules/variables/UseConstInsteadMacro";

describe("check define macros", () => {
  const createContext = (code: string) => {
    return new LinterContext(
      "main.cpp",
      ASTGenerator.fromString(code),
      new ScopeTree(),
      new StartBlock(0, undefined as any),
      new DeclaredMethods([])
    );
  };
  const rule = new UseConstInsteadMacro();

  test.each([
    [`int a;`, undefined],
    [`#define a 1`, "#definea1"],
    [`#define a 1;`, "#definea1"],
    [`#define a;`, undefined],
    [`#define a`, undefined],
  ])("use const instead define", async (code, expected) => {
    const result = rule.run(createContext(code));

    expect(result.pop()?.node.text).toBe(expected);
  });
});
