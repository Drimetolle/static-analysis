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

  test.each([
    [`char *str = "";`, 1],
    [`char *str;`, 1],
    [`const char *str = "";`, 1],
    [`const char *str;`, 1],
    [`string str = "";`, 0],
    [`string str;`, 0],
    [`const string str = "";`, 0],
    [`const string str;`, 0],
  ])("declaration C like string", async (code, expected) => {
    const result = rule.run(await createContext(code));

    expect(result).toHaveLength(expected);
  });
});
