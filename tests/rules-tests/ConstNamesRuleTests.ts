﻿import "reflect-metadata";
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
  globalWrapper,
  TestCase,
  whileWrapper,
} from "../utils/CodeWrappers";
import ConstNames from "../../src/rules/linter/ConstNames";
import TypeBuilder from "../../src/types/Type";
import TypesSourceImplementation from "../../src/types/TypesSourceImplementation";

describe("Check const variable names", () => {
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
      style: "UpperSnakeCase",
    };

    return linterContext;
  };

  const rawCases: TestCase = [
    ["volatile int a", undefined],
    ["const int A", undefined],
    ["const int A_B", undefined],
    ["const int a", "constinta"],
    ["const int *a", "constint*a"],
    ["const int &a", "constint&a"],
    ["const int *&a", "constint*&a"],
    ["const int *a[]", "constint*a[]"],
    ["const int &a[]", "constint&a[]"],
    ["const int *&a[]", "constint*&a[]"],
    ["const int *a[][1]", "constint*a[][1]"],
    ["const int &a[][1]", "constint&a[][1]"],
    ["const int *&a[][1]", "constint*&a[][1]"],
    ["const int *A", undefined],
    ["const int &A", undefined],
    ["const int *&A", undefined],
    ["const int *A[]", undefined],
    ["const int &A[]", undefined],
    ["const int *&A[]", undefined],
    ["const int *A[][1]", undefined],
    ["const int &A[][1]", undefined],
    ["const int *&A[][1]", undefined],
  ];
  const testCases: TestCase = [
    ...globalWrapper(rawCases),
    ...functionWrapper(rawCases),
    ...conditionWrapper(rawCases),
    ...whileWrapper(rawCases),
    ...forLoopWrapper(rawCases),
  ];
  const rule = new ConstNames();

  test.each(testCases)(
    "declared const variable, check name for: %s",
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
    ["volatile int a", undefined],
    ["const int A", undefined],
    ["const int A_B", undefined],
    ["const int a", undefined],
    ["const int *a", undefined],
    ["const int &a", undefined],
    ["const int *&a", undefined],
    ["const int *a[]", undefined],
    ["const int &a[]", undefined],
    ["const int *&a[]", undefined],
    ["const int *a[][1]", undefined],
    ["const int &a[][1]", undefined],
    ["const int *&a[][1]", undefined],
    ["const int *A", undefined],
    ["const int &A", undefined],
    ["const int *&A", undefined],
    ["const int *A[]", undefined],
    ["const int &A[]", undefined],
    ["const int *&A[]", undefined],
    ["const int *A[][1]", undefined],
    ["const int &A[][1]", undefined],
    ["const int *&A[][1]", undefined],
  ])(
    "declared const variable in parameter, check name for: %s",
    async (code, expected) => {
      const result = rule.run(await createContext(`main(${code}) {}`));

      expect(result.pop()?.node.text).toBe(expected);
    }
  );
});
