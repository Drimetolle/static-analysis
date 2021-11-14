import "reflect-metadata";
import VariableNames from "../../src/rules/linter/VariableNames";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";
import DataFlowWalker from "../../src/visitors/DataFlowWalker";
import ConditionVisitor from "../../src/visitors/ConditionVisitor";
import BlockVisitor from "../../src/visitors/BlockVisitor";
import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import ANTLRExpressionConverter from "../../src/source-analysis/expression/ANTLRExpressionConverter";
import LinterContext from "../../src/linter/LinterContext";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";

type TestCase = Array<[string, unknown]>;

describe("Check variable names", () => {
  const createContext = async (code: string) => {
    const ast = ASTGenerator.fromString(code);
    const { scope } = await new DataFlowWalker(
      "",
      new ConditionVisitor(new BlockVisitor()),
      new DeclarationVisitor(),
      new ANTLRExpressionConverter()
    ).start(ast);

    return new LinterContext(
      "main.cpp",
      ast,
      scope,
      new StartBlock(0, undefined as any),
      new DeclaredMethods([])
    );
  };

  const functionWrapper = (cases: TestCase): TestCase =>
    cases.map(([code, expected]) => [`main() { ${code}; }`, expected]);
  const parameterWrapper = (cases: TestCase): TestCase =>
    cases.map(([code, expected]) => [`main(${code}) { }`, expected]);
  const conditionWrapper = (cases: TestCase): TestCase =>
    cases.map(([code, expected]) => [
      `main() { if(true) { ${code}; } }`,
      expected,
    ]);
  const whileWrapper = (cases: TestCase): TestCase =>
    cases.map(([code, expected]) => [
      `main() { while(true) { ${code}; } }`,
      expected,
    ]);
  const forLoopWrapper = (cases: TestCase): TestCase =>
    cases.map(([code, expected]) => [
      `main() { for(;;) { ${code}; } }`,
      expected,
    ]);
  const rawCases: TestCase = [
    ["int a", undefined],
    ["int A", "intA"],
    ["int Type", "intType"],
    ["int TypeType", "intTypeType"],
    ["int aB", undefined],
    ["int AA", "intAA"],
    ["int a_B", "inta_B"],
    ["int A_A", "intA_A"],
    ["int a_b", "inta_b"],
    ["int A_b", "intA_b"],
    ["int *a", undefined],
    ["int &a", undefined],
    ["int *&a", undefined],
    ["const int *a", undefined],
    ["const int &a", undefined],
    ["const int *&a", undefined],
    ["int *a[]", undefined],
    ["int &a[]", undefined],
    ["int *&a[]", undefined],
    ["const int *a[]", undefined],
    ["const int &a[]", undefined],
    ["const int *&a[]", undefined],
    ["const int *a[][1]", undefined],
    ["const int &a[][1]", undefined],
    ["const int *&a[][1]", undefined],
    ["int *A", ""],
    ["int &A", ""],
    ["int *&A", ""],
    ["const int *A", ""],
    ["const int &A", ""],
    ["const int *&A", ""],
    // ["int *A[]", "int*A[]"],
    // ["int &A[]", "int&A[]"],
    // ["int *&A[]", "int*&A[]"],
    // ["const int *A[]", "constint*A[]"],
    // ["const int &A[]", "constint&A[]"],
    // ["const int *&A[]", "constint*&A[]"],
    // ["const int *A[][1]", "constint*A[][1]"],
    // ["const int &A[][1]", "constint&A[][1]"],
    // ["const int *&A[][1]", "constint*&A[][1]"],
  ];
  const testCases: TestCase = [
    ...functionWrapper(rawCases),
    ...parameterWrapper(rawCases),
    ...conditionWrapper(rawCases),
    ...whileWrapper(rawCases),
    ...forLoopWrapper(rawCases),
  ];
  const rule = new VariableNames();

  test.each(testCases)(
    "declared variable in local scope, check name for: %s",
    async (code, expected) => {
      const result = rule.run(await createContext(code));

      if (typeof expected === "string") {
        expect(result.pop()?.node.text).toMatch(expected);
      } else {
        expect(result.pop()?.node.text).toBe(expected);
      }
    }
  );

  test.each([
    ["int A;", undefined],
    ["int a;", undefined],
  ])(
    "declared variable in global scope, check name for: %s",
    async (code, expected) => {
      const result = rule.run(await createContext(code));
      expect(result.pop()?.node.text).toBe(expected);
    }
  );
});
