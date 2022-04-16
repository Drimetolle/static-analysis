import "reflect-metadata";
import CheckUserInput from "../../src/rules/variables/CheckUserInput";
import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import {TypeResolverImplementation} from "../../src/types/TypeResolver";
import TypesSourceImplementation from "../../src/types/TypesSourceImplementation";
import TypeBuilder, {ValueTypeBuilder} from "../../src/types/Type";
import DataFlowWalker from "../../src/visitors/DataFlowWalker";
import ConditionVisitor from "../../src/visitors/ConditionVisitor";
import BlockVisitor from "../../src/visitors/BlockVisitor";
import ANTLRExpressionConverter from "../../src/source-analysis/expression/ANTLRExpressionConverter";
import LinterContext from "../../src/linter/LinterContext";
import StartBlock from "../../src/source-analysis/control-flow/blocks/StartBlock";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import ASTGenerator from "../utils/ASTGenerator";
import createDeclarationVisitor from "../utils/createDeclarationVisitor";

describe("Check user input", () => {
  const createContext = async (code: string) => {
    const ast = ASTGenerator.fromString(code);
    const declarationVisitor = createDeclarationVisitor();

    const { scope, cfg } = await new DataFlowWalker(
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
      cfg,
      new DeclaredMethods([])
    );

    return linterContext;
  };

  const wrapper = (code: string) => `
    struct Struct1 {
      int age;
      long ss;
      float weight;
      char name[25];
      const char * secondName;
      const char secondName2;
    };

    void main() {
      ${code}
    }
  `;

  const rule = new CheckUserInput();

  test.each([
    [`
    auto a;
    scanf("", a);
    `],
    [`
    auto a;
    scanf("", a);

    if (a) {}
    `],
    [`
    auto a;
    auto b;
    scanf("", a);

    b = a;
    `, "a"],
    [`
    auto a;
    auto b;
    scanf("", a);

    if (a) {}

    b = a;
    `],
    [`
    Struct1 a;
    Struct1 b;
    scanf("", a->age);

    if (a) {}

    b = a->age;
    `, "age"],
    [`
    Struct1 a;
    Struct1 b;
    scanf("", a->age);

    if (a->age) {}

    b = a->age;
    `],
    [`
    Struct1 a;
    Struct1 b;
    scanf("", a->age);

    b = a;
    `, "a"]
  ] as Array<[string, string | undefined]>)(
    "scanf check %s",
    async (code, expectedVariableName = undefined) => {
      const result = rule.run(await createContext(wrapper(code)));

      if (expectedVariableName != undefined) {
        expect(result.pop()?.description).toContain(expectedVariableName);
      }
    }
  );
});

