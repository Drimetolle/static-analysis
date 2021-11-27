import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../utils/ASTGenerator";
import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import InfinityLoopTruePredicate from "../../src/rules/loops/InfinityLoopTruePredicate";

describe("Check declaration string in C like style", () => {
  const createContext = (code: string) => {
    return new LinterContext(
      "",
      ASTGenerator.fromString(code),
      new ScopeTree(),
      new StartBlock(0, undefined as any),
      new DeclaredMethods([])
    );
  };
  const functionWrapper = (code: string) => `main() { ${code} }`;
  const rule = new InfinityLoopTruePredicate();

  test.each([
    [`while(1);`, "1"],
    [`while(-1);`, "-1"],
    [`while(0);`, "0"],
    [`while(0.0);`, "0.0"],
    [`while('c');`, "'c'"],
    [`while("s");`, `"s"`],
    [`while(true);`, undefined],
  ])("using literal like boolean", async (code, expected) => {
    const result = rule.run(createContext(functionWrapper(code)));

    expect(result.pop()?.node.text).toBe(expected);
  });
});
