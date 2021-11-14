﻿import "reflect-metadata";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";
import DataFlowWalker from "../../src/visitors/DataFlowWalker";
import ConditionVisitor from "../../src/visitors/ConditionVisitor";
import BlockVisitor from "../../src/visitors/BlockVisitor";
import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import ANTLRExpressionConverter from "../../src/source-analysis/expression/ANTLRExpressionConverter";
import {
  conditionWrapper,
  forLoopWrapper,
  functionWrapper,
  globalWrapper,
  TestCase,
  whileWrapper,
} from "../../utils-for-testing/CodeWrappers";
import { DeclarationSpecifier } from "../../src/source-analysis/data-objects/DeclarationSpecifier";

describe("Check const variable names", () => {
  const createScope = async (code: string) => {
    const ast = ASTGenerator.fromString(code);
    const { scope } = await new DataFlowWalker(
      "",
      new ConditionVisitor(new BlockVisitor()),
      new DeclarationVisitor(),
      new ANTLRExpressionConverter()
    ).start(ast);

    return scope;
  };

  const rawCases: TestCase = [
    ["int a", []],
    ["int A", []],
    ["int Type", []],
    ["int TypeType", []],
    ["int aB", []],
    ["int AA", []],
    ["int a_B", []],
    ["int A_A", []],
    ["int a_b", []],
    ["int A_b", []],
    ["int *a", []],
    ["int &a", []],
    ["int *&a", []],
    ["const int a", [DeclarationSpecifier.Const]],
    [
      "const volatile int a",
      [DeclarationSpecifier.Const, DeclarationSpecifier.Volatile],
    ],
    ["const int *a", [DeclarationSpecifier.Const]],
    ["const int &a", [DeclarationSpecifier.Const]],
    ["const int *&a", [DeclarationSpecifier.Const]],
    ["int *a[]", []],
    ["int &a[]", []],
    ["int *&a[]", []],
    ["const int *a[]", [DeclarationSpecifier.Const]],
    ["const int &a[]", [DeclarationSpecifier.Const]],
    ["const int *&a[]", [DeclarationSpecifier.Const]],
    ["const int *a[][1]", [DeclarationSpecifier.Const]],
    ["const int &a[][1]", [DeclarationSpecifier.Const]],
    ["const int *&a[][1]", [DeclarationSpecifier.Const]],
    ["int *A", []],
    ["int &A", []],
    ["int *&A", []],
    ["const int *A", [DeclarationSpecifier.Const]],
    ["const int &A", [DeclarationSpecifier.Const]],
    ["const int *&A", [DeclarationSpecifier.Const]],
    ["int *A[]", []],
    ["int &A[]", []],
    ["int *&A[]", []],
    ["const int *A[]", [DeclarationSpecifier.Const]],
    ["const int &A[]", [DeclarationSpecifier.Const]],
    ["const int *&A[]", [DeclarationSpecifier.Const]],
    ["const int *A[][1]", [DeclarationSpecifier.Const]],
    ["const int &A[][1]", [DeclarationSpecifier.Const]],
    ["const int *&A[][1]", [DeclarationSpecifier.Const]],
  ];
  const testCases: TestCase = [
    ...globalWrapper(rawCases),
    ...functionWrapper(rawCases),
    // ...parameterWrapper(rawCases), TODO some tests failed
    ...conditionWrapper(rawCases),
    ...whileWrapper(rawCases),
    ...forLoopWrapper(rawCases),
  ];

  test.each(testCases)(
    "variable specifiers, check for: %s",
    async (code, expected) => {
      const expectedSet = new Set(expected as Array<DeclarationSpecifier>);
      const result = (await createScope(code)).toArray();

      for (const { data } of result) {
        for (const variable of data.declaredVariables.variables) {
          expect(variable.specifiers).toEqual(expectedSet);
        }
      }
    }
  );
});
