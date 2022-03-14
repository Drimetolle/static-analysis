import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../utils/ASTGenerator";
import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import ShortGlobalVariable from "../../src/rules/linter/ShortGlobalVariable";

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
  const rule = new ShortGlobalVariable();
  const rawCases = [
    "int a;",
    "const int a;",
    "const int a[];",
    // "int a[1];"
    "int *a;",
    "int longName;",
    "const int longName;",
    "const int *longName;",
    "int *longName;",
    "int longName[];",
    "int longName[1];",
  ];
  const expectedResultForGlobalScope = [
    "a",
    "a",
    "a[]",
    // "a[1]",
    "*a",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  const testCasesForGlobalScope: Array<Array<any>> = rawCases.map((text, i) => [
    text,
    expectedResultForGlobalScope[i],
  ]);

  const testCasesForLocalScope: Array<Array<any>> = rawCases.map((text) => [
    text,
    undefined,
  ]);

  test.each(testCasesForGlobalScope)(
    "check length for global variables %s",
    async (code, expected) => {
      const result = rule.run(createContext(code));

      expect(result.pop()?.node.text).toBe(expected);
    }
  );

  test.each(testCasesForLocalScope)(
    "check length for local variables %s",
    async (code, expected) => {
      const result = rule.run(createContext(functionWrapper(code)));

      expect(result.pop()?.node.text).toBe(expected);
    }
  );
});
