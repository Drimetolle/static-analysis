import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";
import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import TypeNames from "../../src/rules/linter/TypeNames";

describe("Check type names", () => {
  const createContext = (code: string) => {
    return new LinterContext(
      "",
      ASTGenerator.fromString(code),
      new ScopeTree(),
      new StartBlock(0, undefined as any),
      new DeclaredMethods([])
    );
  };

  const concatClass = (
    cases: Array<[string, unknown]>
  ): Array<[string, unknown]> =>
    cases.map(([code, expected]) => [`class ${code}`, expected]);
  const concatStruct = (
    cases: Array<[string, unknown]>
  ): Array<[string, unknown]> =>
    cases.map(([code, expected]) => [`struct ${code}`, expected]);
  const raw: Array<[string, unknown]> = [
    ["a {};", "a"],
    ["A {};", undefined],
    ["Type {};", undefined],
    ["TypeType {};", undefined],
    ["aB {};", "aB"],
    ["AA {};", "AA"],
  ];
  const testCases: Array<[string, unknown]> = [
    ...concatClass(raw),
    ...concatStruct(raw),
  ];
  const rule = new TypeNames();

  test.each(testCases)(
    "declared type check name for: %s",
    async (code, expected) => {
      const result = rule.run(await createContext(code));
      expect(result.pop()?.node.text).toBe(expected);
    }
  );
});
