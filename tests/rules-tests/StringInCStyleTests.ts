import StringInCStyle from "../../src/rules/variables/StringInCStyle";
import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";
import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";

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

  const rule = new StringInCStyle();

  test.each([
    // [`char *str = "";`, 1],
    // [`char *str;`, 1],
    // [`const char *str = "";`, 1],
    // [`const char *str;`, 1],
    [`string str = "";`, 0],
    [`string str;`, 0],
    [`const string str = "";`, 0],
    [`const string str;`, 0],
  ])("declaration C like string", async (code, expected) => {
    const result = rule.run(createContext(code));

    expect(result).toHaveLength(expected);
  });
});
