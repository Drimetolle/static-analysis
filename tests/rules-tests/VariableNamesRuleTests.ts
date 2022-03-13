import "reflect-metadata";
import VariableNames from "../../src/rules/linter/VariableNames";
import ASTGenerator from "../utils/ASTGenerator";
import DataFlowWalker from "../../src/visitors/DataFlowWalker";
import ConditionVisitor from "../../src/visitors/ConditionVisitor";
import BlockVisitor from "../../src/visitors/BlockVisitor";
import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import ANTLRExpressionConverter from "../../src/source-analysis/expression/ANTLRExpressionConverter";
import LinterContext from "../../src/linter/LinterContext";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import {
  conditionWrapper,
  forLoopWrapper,
  functionWrapper,
  parameterWrapper,
  TestCase,
  whileWrapper,
} from "../utils/CodeWrappers";
import { isEmpty } from "ramda";
import TypeBuilder from "../../src/types/Type";
import TypesSourceImplementation from "../../src/types/TypesSourceImplementation";

describe("Check variable names in camelCase", () => {
  const createContext = async (code: string) => {
    const ast = ASTGenerator.fromString(code);
    const declarationVisitor = new DeclarationVisitor()

    const { scope } = await new DataFlowWalker(
      "",
      new ConditionVisitor(new BlockVisitor()),
      declarationVisitor,
      new ANTLRExpressionConverter(),
      new TypeBuilder(declarationVisitor),
      new TypesSourceImplementation()
    ).start(ast);

    const linterContext = new LinterContext(
      "main.cpp",
      ast,
      scope,
      new StartBlock(0, undefined as any),
      new DeclaredMethods([])
    );

    linterContext.config = {
      style: "CamelCase",
    };

    return linterContext;
  };

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
    ["int *A", "int*A"],
    ["int &A", "int&A"],
    ["int *&A", "int*&A"],
    ["const int *A", "constint*A"],
    ["const int &A", "constint&A"],
    ["const int *&A", "constint*&A"],
    ["int *A[]", "int*A[]"],
    ["int &A[]", "int&A[]"],
    ["int *&A[]", "int*&A[]"],
    ["const int *A[]", "constint*A[]"],
    ["const int &A[]", "constint&A[]"],
    ["const int *&A[]", "constint*&A[]"],
    ["const int *A[][1]", "constint*A[][1]"],
    ["const int &A[][1]", "constint&A[][1]"],
    ["const int *&A[][1]", "constint*&A[][1]"],
  ];
  const rawCasesForMultipleVars: TestCase = [
    ["int a, b", []],
    ["int A, B", ["A", "B"]],
    ["int Type, Typ", ["Type", "Typ"]],
    ["int TypeA, TypeB", ["TypeA", "TypeB"]],
    ["int aB", []],
    ["int AA, BB", ["AA", "BB"]],
    ["int a_B, b_A", ["a_B", "b_A"]],
    ["int A_A, B_B", ["A_A", "B_B"]],
    ["int a_b, b_a", ["a_b", "b_a"]],
    ["int A_b, B_a", ["A_b", "B_a"]],
    ["int *a", []],
    ["int &a", []],
    ["int *&a", []],
    ["const int *a", []],
    ["const int &a", []],
    ["const int *&a", []],
    ["int *a[]", []],
    ["int &a[]", []],
    ["int *&a[]", []],
    ["const int *a[]", []],
    ["const int &a[]", []],
    ["const int *&a[]", []],
    ["const int *a[][1]", []],
    ["const int &a[][1]", []],
    ["const int *&a[][1]", []],
    ["int *A, *B", ["*A", "*B"]],
    ["int &A, &B", ["&A", "&B"]],
    ["int *&A, *&B", ["*&A", "*&B"]],
    ["const int *A, *B", ["*A", "*B"]],
    ["const int &A, &B", ["&A", "&B"]],
    ["const int *&A, *&B", ["*&A", "*&B"]],
    ["int *A[], *B[]", ["*A[]", "*B[]"]],
    ["int &A[], &B[]", ["&A[]", "&B[]"]],
    ["int *&A[], *&B[]", ["*&A[]", "*&B[]"]],
    ["const int *A[], *B[]", ["*A[]", "*B[]"]],
    ["const int &A[], &B[]", ["&A[]", "&B[]"]],
    ["const int *&A[], *&B[]", ["*&A[]", "*&B[]"]],
    ["const int *A[][1], *B[2][1]", ["*A[][1]", "*B[2][1]"]],
    ["const int &A[][1], &B[2][1]", ["&A[][1]", "&B[2][1]"]],
    ["const int *&A[][1], *&B[2][1]", ["*&A[][1]", "*&B[2][1]"]],
  ];
  const testCases: TestCase = [
    ...functionWrapper(rawCases),
    ...parameterWrapper(rawCases),
    ...conditionWrapper(rawCases),
    ...whileWrapper(rawCases),
    ...forLoopWrapper(rawCases),
  ];
  const testCasesForMultipleVars: TestCase = [
    ...functionWrapper(rawCasesForMultipleVars),
    ...conditionWrapper(rawCasesForMultipleVars),
    ...whileWrapper(rawCasesForMultipleVars),
    ...forLoopWrapper(rawCasesForMultipleVars),
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
      expect(result.pop()?.node.text).toEqual(expected);
    }
  );

  test.each(testCasesForMultipleVars)(
    "multiple declared variable in local scope, check name for: %s",
    async (code, expects) => {
      const result = rule
        .run(await createContext(code))
        .map(({ node }) => node.text.replace(";", ""));

      if (isEmpty(expects)) {
        expect(result).toHaveLength(0);
      }

      for (const expected of expects as Array<string>) {
        expect(result).toContainEqual(expected);
      }
    }
  );
});
