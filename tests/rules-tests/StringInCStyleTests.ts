import "reflect-metadata";
import StringInCStyle from "../../src/rules/variables/StringInCStyle";
import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../utils/ASTGenerator";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
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
  parameterWrapper,
  TestCase,
  whileWrapper,
} from "../utils/CodeWrappers";

describe("Check declaration string in C like style", () => {
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

  const rule = new StringInCStyle();
  const rawCases: TestCase = [
    [`char *str = ""`, `char*str=""`],
    [`char *str`, `char*str`],
    [`const char *str = ""`, `constchar*str=""`],
    [`const char *str`, `constchar*str`],
    [`string str = ""`, undefined],
    [`string str`, undefined],
    [`const string str = ""`, undefined],
    [`const string str`, undefined],
  ];
  const testCases: TestCase = [
    ...globalWrapper(rawCases),
    ...functionWrapper(rawCases),
    ...conditionWrapper(rawCases),
    ...whileWrapper(rawCases),
    ...parameterWrapper(rawCases),
    ...forLoopWrapper(rawCases),
  ];

  test.each(testCases)(
    "global declaration C like string (%s)",
    async (code, expected) => {
      const result = rule.run(await createContext(code));

      if (typeof expected === "string") {
        expect(result.pop()?.node.text).toMatch(expected);
      } else {
        expect(result.pop()?.node.text).toBe(expected);
      }
    }
  );
});
