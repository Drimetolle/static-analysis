import "reflect-metadata";
import DataFlowWalker from "../../src/visitors/DataFlowWalker";
import ConditionVisitor from "../../src/visitors/ConditionVisitor";
import BlockVisitor from "../../src/visitors/BlockVisitor";
import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";
import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import JsonFormatter from "../../src/utils/json-formatters/JsonFormatter";
import CodeBlock from "../../src/source-analysis/data-objects/CodeBlock";
import DeclaredVariablesInScope from "../../src/source-analysis/data-flow/DeclaredVariablesInScope";
import Expression from "../../src/source-analysis/data-objects/Expression";
import { VariableState } from "../../src/source-analysis/data-objects/VariableDeclaration";
import { TypeSpecifier } from "../../src/source-analysis/data-objects/LanguageKeyWords";
import ANTLRExpressionConverter from "../../src/source-analysis/expression/ANTLRExpressionConverter";

export async function createTestCase(code: string, expected: ScopeTree) {
  const { scope } = await new DataFlowWalker(
    "",
    new ConditionVisitor(new BlockVisitor()),
    new DeclarationVisitor(),
    new ANTLRExpressionConverter()
  ).start(ASTGenerator.fromString(code));

  expect(JsonFormatter.ScopeToJson(scope)).toBe(
    JsonFormatter.ScopeToJson(expected)
  );
}

export function createDeclaration(name = "a", expression = "1") {
  const variables = new DeclaredVariablesInScope();
  variables.declare(
    name,
    name,
    { text: expression } as Expression,
    null as any
  );
  return variables;
}

export function createAssigment(name = "a", expression = "1") {
  const variables = new DeclaredVariablesInScope();
  variables.assign(name, { text: expression } as Expression, null as any);
  return variables;
}

describe("declaration and assigment tests in simple blocks", () => {
  test("simple declaration", async () => {
    const code = `
      void main() {
        auto a;
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration("a", "");
    scope.add(new CodeBlock(variables), scope.getRoot);

    await createTestCase(code, scope);
  });

  test("simple declaration and assign with int type", async () => {
    const code = `
      void main() {
        int a;
        a = 1;
      }
    `;
    const scope = new ScopeTree();
    const variables = new DeclaredVariablesInScope();
    variables.declare(
      "a",
      "a",
      { text: "" } as Expression,
      null as any,
      TypeSpecifier.INT
    );
    variables.assign(
      "a",
      { text: "1" } as Expression,
      null as any,
      TypeSpecifier.INT
    );
    scope.add(new CodeBlock(variables), scope.getRoot);

    await createTestCase(code, scope);
  });

  test("simple multiple declaration", async () => {
    const code = `
      void main() {
        auto a, b, c;
      }
    `;
    const scope = new ScopeTree();
    const variables = new DeclaredVariablesInScope();
    variables.declare("a", "a", new Expression(), null as any);
    variables.declare("b", "b", new Expression(), null as any);
    variables.declare("c", "c", new Expression(), null as any);
    scope.add(new CodeBlock(variables), scope.getRoot);

    await createTestCase(code, scope);
  });

  test("simple declaration with assigment", async () => {
    const code = `
      void main() {
        auto a = 1;
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration();
    scope.add(new CodeBlock(variables), scope.getRoot);

    await createTestCase(code, scope);
  });

  test("simple multiple declaration with assigment", async () => {
    const code = `
      void main() {
        auto a = 1, b = 2, c;
      }
    `;
    const scope = new ScopeTree();
    const variables = new DeclaredVariablesInScope();
    variables.declare("a", "a", { text: "1" } as Expression, null as any);
    variables.declare("b", "b", { text: "2" } as Expression, null as any);
    variables.declare("c", "c", new Expression(), null as any);
    scope.add(new CodeBlock(variables), scope.getRoot);

    await createTestCase(code, scope);
  });

  test("declaration in lexical scope", async () => {
    const code = `
      void main() {
        {
          auto a = 1;
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration();
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);

    await createTestCase(code, scope);
  });

  test("assigment in lexical scope", async () => {
    const code = `
      void main() {
        {
          a = 1;
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createAssigment();
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);

    await createTestCase(code, scope);
  });

  test("declaration top scope, assigment in lexical scope", async () => {
    const code = `
      void main() {
        auto a;
        {
          a = 1;
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration("a", "");
    const variablesInner = createAssigment();
    variablesInner.getVariable("a")!.variable.state = VariableState.defined;
    const newNode = scope.add(new CodeBlock(variables), scope.getRoot);
    scope.add(new CodeBlock(variablesInner), newNode!);

    await createTestCase(code, scope);
  });

  test("simple assigment", async () => {
    const code = `
      void main() {
        a = 1;
      }
    `;
    const scope = new ScopeTree();
    const variables = createAssigment();
    scope.add(new CodeBlock(variables), scope.getRoot);

    await createTestCase(code, scope);
  });

  test("simple multiple assigment", async () => {
    const code = `
      void main() {
        a = 1, b = 2, c = 3;
      }
    `;
    const scope = new ScopeTree();
    const variables = new DeclaredVariablesInScope();
    variables.assign("a", { text: "1" } as Expression, null as any);
    variables.assign("b", { text: "2" } as Expression, null as any);
    variables.assign("c", { text: "3" } as Expression, null as any);
    scope.add(new CodeBlock(variables), scope.getRoot);

    await createTestCase(code, scope);
  });

  test("simple in lexical scope", async () => {
    const code = `
      void main() {
        {
          a = 1;
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createAssigment();
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);

    await createTestCase(code, scope);
  });

  test("declaration and assigment in lexical scope", async () => {
    const code = `
      void main() {
        {
          auto a;
          a = 1;
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration("a", "");
    variables.assign(
      "a",
      { text: "1" } as Expression,

      null as any
    );
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);

    await createTestCase(code, scope);
  });
});

describe("declaration and assigment tests in if statement", () => {
  test("declaration in if statement", async () => {
    const code = `
      void main() {
        if(true) {
          auto a = 1;
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration();
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);

    await createTestCase(code, scope);
  });

  test("assigment inner if condition", async () => {
    const code = `
      void main() {
        if((b = 2) == 1) {
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createAssigment();
    scope.add(new CodeBlock(variables), scope.getRoot);

    // TODO
    // await createTestCase(code, scope);
  });

  test("assigment in if statement", async () => {
    const code = `
      void main() {
        if(true) {
          a = 1;
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createAssigment();
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);

    await createTestCase(code, scope);
  });
});

describe("declaration and assigment tests in loop statement", () => {
  async function baseTestCase(code: string) {
    const scope = new ScopeTree();
    const variables = createDeclaration("i", "1");
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    const scope2 = scope.add(new CodeBlock(variables), newNode!);
    scope.add(new CodeBlock(), scope2!);

    await createTestCase(code, scope);
  }

  test("declaration in for statement", async () => {
    const code = `
      void main() {
        for(auto i = 1;;) {
        }
      }
    `;
    await baseTestCase(code);
  });

  test("assigment in for statement", async () => {
    const code = `
      void main() {
        for(i = 1;;) {
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createAssigment("i", "1");
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    const scope2 = scope.add(new CodeBlock(variables), newNode!);
    scope.add(new CodeBlock(), scope2!);

    await createTestCase(code, scope);
  });

  test("declaration in for statement without loop expression", async () => {
    const code = `
      void main() {
        for(auto i = 1; i < 1;) {
        }
      }
    `;
    await baseTestCase(code);
  });

  test("declaration in range for statement", async () => {
    const code = `
      void main() {
        for(auto a : b) {
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration("a", "b");
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    const scope2 = scope.add(new CodeBlock(variables), newNode!);
    scope.add(new CodeBlock(), scope2!);

    // TODO
    // await createTestCase(code, scope);
  });

  test("assigment in while statement", async () => {
    const code = `
      void main() {
        while((a = 2) == 1) {
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createAssigment("a", "2");
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    const scope2 = scope.add(new CodeBlock(variables), newNode!);
    scope.add(new CodeBlock(), scope2!);

    // TODO
    // await createTestCase(code, scope);
  });

  test("assigment in do while statement", async () => {
    const code = `
      void main() {
        do {
          auto b;
        }
        while((a = 2) == 1);
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration("b");
    variables.assign("a", { text: "2" } as Expression, null as any);
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    const scope2 = scope.add(new CodeBlock(variables), newNode!);
    scope.add(new CodeBlock(), scope2!);
    // TODO
    // await createTestCase(code, scope);
  });
});

describe("assigment in expression", () => {
  async function singleAssigment(code: string) {
    const scope = new ScopeTree();
    const variables = createAssigment();
    scope.add(new CodeBlock(variables), scope.getRoot);
    await createTestCase(code, scope);
  }

  test("assigment in do while statement", async () => {
    const code = `
      void main() {
        (a = 1);
      }
    `;

    // TODO
    // await singleAssigment(code);
  });
});
