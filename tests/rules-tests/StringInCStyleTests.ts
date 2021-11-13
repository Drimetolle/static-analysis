import "reflect-metadata";
import StringInCStyle from "../../src/rules/variables/StringInCStyle";
import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import DataFlowWalker from "../../src/visitors/DataFlowWalker";
import ConditionVisitor from "../../src/visitors/ConditionVisitor";
import BlockVisitor from "../../src/visitors/BlockVisitor";
import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import ANTLRExpressionConverter from "../../src/source-analysis/expression/ANTLRExpressionConverter";

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
  const functionWrapper = (code: string) => `main() { ${code} }`;
  const ifWrapper = (code: string) => `main() { if(true) { ${code} } }`;
  const whileWrapper = (code: string) => `main() { while(true) { ${code} } }`;
  const parameterWrapper = (code: string) => `main(${code}) { }`;
  const testCases: Array<[string, number]> = [
    [`char *str = "";`, 1],
    [`char *str;`, 1],
    [`const char *str = "";`, 1],
    [`const char *str;`, 1],
    [`string str = "";`, 0],
    [`string str;`, 0],
    [`const string str = "";`, 0],
    [`const string str;`, 0],
  ];

  test.each(testCases)(
    "global declaration C like string (%s)",
    async (code, expected) => {
      const result = rule.run(await createContext(code));

      expect(result).toHaveLength(expected);
    }
  );

  test.each(testCases)(
    "local declaration C like string (%s)",
    async (code, expected) => {
      const result = rule.run(await createContext(functionWrapper(code)));

      expect(result).toHaveLength(expected);
    }
  );

  test.each(testCases)(
    "local declaration in if C like string (%s)",
    async (code, expected) => {
      const result = rule.run(await createContext(ifWrapper(code)));

      expect(result).toHaveLength(expected);
    }
  );

  test.each(testCases)(
    "local declaration in while C like string (%s)",
    async (code, expected) => {
      const result = rule.run(await createContext(whileWrapper(code)));

      expect(result).toHaveLength(expected);
    }
  );

  test.each([
    [`char *str = ""`, 1],
    [`char *str`, 1],
    [`const char *str = ""`, 1],
    [`const char *str`, 1],
    [`string str = ""`, 0],
    [`string str`, 0],
    [`const string str = ""`, 0],
    [`const string str`, 0],
  ])(
    "local declaration in parameter C like string (%s)",
    async (code, expected) => {
      const result = rule.run(await createContext(parameterWrapper(code)));

      expect(result).toHaveLength(expected);
    }
  );
});
