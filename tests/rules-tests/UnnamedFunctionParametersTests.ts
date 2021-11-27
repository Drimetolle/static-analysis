import UnnamedFunctionParameters from "../../src/rules/functions/UnnamedFunctionParameters";
import { createContextWithAst } from "../utils/LinterContextCreators";

describe("Check unnamed function parameters", () => {
  const functionWrapper = (code: string) => `main(${code}) {}`;
  const rule = new UnnamedFunctionParameters();

  test.each([
    [`int`, `int`],
    [`const int`, `constint`],
    [`int&`, `int&`],
    [`int*`, `int*`],
    [`int*&`, `int*&`],
    [`const int*`, `constint*`],
    [`const int&`, `constint&`],
    [`char s[]`, undefined],
    [`int a`, undefined],
    [`int a[]`, undefined],
    [`int *a`, undefined],
    [`int &a`, undefined],
    [`int &a[]`, undefined],
    [`const int a`, undefined],
    [`const SomeType a`, undefined],
    // TODO unnamed parameter for custom type
    // [`SomeType`, `SomeType`],
  ] as Array<[string, string | undefined]>)(
    "using single unnamed function parameters %s",
    async (code, expected) => {
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
    [`int a, float b`, []],
    [`int &a, float *b`, []],
    [`const int &a, const float *b`, []],
    [`const int &a[], const float *b[][]`, []],
    // TODO unnamed parameter for custom type
    // [`SomeType &a, SomeType *b`, [`SomeType&a`, `SomeType*b`]],
  ])(
    "using multiple unnamed function parameters %s",
    async (code, expected) => {
      const result = rule.run(createContextWithAst(functionWrapper(code)));

      expect(result.map((report) => report.node.text)).toEqual(expected);
    }
  );
});
