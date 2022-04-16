import "reflect-metadata";
import LinterContext from "../../src/linter/LinterContext";
import ASTGenerator from "../utils/ASTGenerator";
import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import DeclaredMethods from "../../src/source-analysis/methods/DeclaredMethods";
import DataFlowWalker from "../../src/visitors/DataFlowWalker";
import ConditionVisitor from "../../src/visitors/ConditionVisitor";
import BlockVisitor from "../../src/visitors/BlockVisitor";
import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import ANTLRExpressionConverter from "../../src/source-analysis/expression/ANTLRExpressionConverter";
import ReturnForNotVoidFunction from "../../src/rules/functions/ReturnForNotVoidFunction";
import TypeBuilder, {ValueTypeBuilder} from "../../src/types/Type";
import TypesSourceImplementation from "../../src/types/TypesSourceImplementation";
import {TypeResolverImplementation} from "../../src/types/TypeResolver";

describe("Tests for rule ReturnForNotVoidFunction", () => {
  const createContext = async (code: string) => {
    const ast = ASTGenerator.fromString(code);
    const declarationVisitor = new DeclarationVisitor(new TypeResolverImplementation(new TypesSourceImplementation(), new ValueTypeBuilder()))

    const { cfg } = await new DataFlowWalker(
      "",
      new ConditionVisitor(new BlockVisitor()),
      declarationVisitor,
      new ANTLRExpressionConverter(),
      new TypeBuilder(declarationVisitor),
      new TypesSourceImplementation()
    ).start(ast);

    return new LinterContext(
      "main.cpp",
      ast,
      new ScopeTree(),
      cfg,
      new DeclaredMethods([])
    );
  };
  const rule = new ReturnForNotVoidFunction();

  test.each([
    [`int main() { return 1; }`, undefined],
    [`int main() { return; }`, "int main()"],
    [`int main() {}`, "int main()"],
    [`SomeType main() { return var; }`, undefined],
    [`void main() {}`, undefined],
    [`void main() { return; }`, undefined],
    [`void main() { return 1; }`, undefined],
    [`main() {}`, undefined],
  ])("Check return statement in non void function", async (code, expected) => {
    const result = rule.run(await createContext(code));

    expect(
      result
        .pop()
        ?.nodes.map((node) => node.text)
        .join(" ")
    ).toBe(expected);
  });
});
