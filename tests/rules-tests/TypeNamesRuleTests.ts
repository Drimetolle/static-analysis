import TypeNames from "../../src/rules/linter/TypeNames";
import { createContextWithAst } from "../utils/LinterContextCreators";

type TestCase = Array<[string, unknown]>;

describe("Check type names", () => {
  const concatClass = (cases: TestCase): TestCase =>
    cases.map(([code, expected]) => [`class ${code}`, expected]);
  const concatStruct = (cases: TestCase): TestCase =>
    cases.map(([code, expected]) => [`struct ${code}`, expected]);
  const rawCases: TestCase = [
    ["a {};", "a"],
    ["A {};", undefined],
    ["Type {};", undefined],
    ["TypeType {};", undefined],
    ["aB {};", "aB"],
    ["AA {};", "AA"],
    ["a_B {};", "a_B"],
    ["A_A {};", "A_A"],
    ["a_b {};", "a_b"],
    ["A_b {};", "A_b"],
  ];
  const testCases: TestCase = [
    ...concatClass(rawCases),
    ...concatStruct(rawCases),
  ];
  const rule = new TypeNames();

  test.each(testCases)(
    "declared type check name for: %s",
    async (code, expected) => {
      const result = rule.run(await createContextWithAst(code));
      expect(result.pop()?.node.text).toBe(expected);
    }
  );
});
