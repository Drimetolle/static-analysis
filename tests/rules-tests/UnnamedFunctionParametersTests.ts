import UnnamedFunctionParameters from "../../src/rules/functions/UnnamedFunctionParameters";
import { createContextWithAst } from "../../utils-for-testing/LinterContextCreators";

describe("Check declaration string in C like style", () => {
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
      const result = rule.run(createContextWithAst(functionWrapper(code)));

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
      const result = rule.run(createContextWithAst(functionWrapper(code)));

      expect(result.map((report) => report.node.text)).toEqual(expected);
    }
  );
});
