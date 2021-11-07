import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";
import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import UnnamedFunctionParameters from "../../src/rules/functions/UnnamedFunctionParameters";

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
  const functionWrapper = (code: string) => `main(${code}) {}`;
  const rule = new UnnamedFunctionParameters();

  test.each([
    [`int`],
    [`const int`, `constint`],
    [`int&`],
    [`int*`],
    [`int*&`],
    [`const int*`, `constint*`],
    [`const int&`, `constint&`],
  ])(
    "using single unnamed function parameters %s",
    async (code, expected = code) => {
      const result = rule.run(createContext(functionWrapper(code)));

      expect(result.pop()?.node.text).toBe(expected);
    }
  );

  test.each([
    [`int, float`, [`int`, `float`]],
    [`const int, const float`, [`constint`, `constfloat`]],
    [`int&, float&`, [`int&`, `float&`]],
    [`int*, float*`, [`int*`, `float*`]],
    [`int*&, float*&`, [`int*&`, `float*&`]],
    [`const int*, const float*`, [`constint*`, `constfloat*`]],
    [`const int&, const float&`, [`constint&`, `constfloat&`]],
  ])(
    "using multiple unnamed function parameters %s",
    async (code, expected) => {
      const result = rule.run(createContext(functionWrapper(code)));

      expect(result.map((report) => report.node.text)).toEqual(expected);
    }
  );
});
