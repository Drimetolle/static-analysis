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
import PositionInFile from "../../src/source-analysis/data-objects/PositionInFile";
import Expression from "../../src/source-analysis/data-objects/Expression";

async function createTestCase(code: string, expected: ScopeTree) {
  const { scope } = await new DataFlowWalker(
    "",
    new ConditionVisitor(new BlockVisitor()),
    new DeclarationVisitor()
  ).start(ASTGenerator.fromString(code));

  expect(JsonFormatter.ScopeToJson(expected)).toBe(
    JsonFormatter.ScopeToJson(scope)
  );
}

function createDeclaration(
  position: PositionInFile,
  name = "a",
  expression = "1"
) {
  const variables = new DeclaredVariablesInScope();
  variables.declare(
    name,
    { text: expression } as Expression,
    position,
    null as any
  );
  return variables;
}

function createAssigment(
  position: PositionInFile,
  name = "a",
  expression = "1"
) {
  const variables = new DeclaredVariablesInScope();
  variables.assign(
    name,
    { text: expression } as Expression,
    position,
    null as any
  );
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
    const variables = createDeclaration(new PositionInFile(3, 8), "a", "");
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
    variables.declare(
      "a",
      new Expression(),
      new PositionInFile(3, 13),
      null as any
    );
    variables.declare(
      "b",
      new Expression(),
      new PositionInFile(3, 16),
      null as any
    );
    variables.declare(
      "c",
      new Expression(),
      new PositionInFile(3, 19),
      null as any
    );
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
    const variables = createDeclaration(new PositionInFile(3, 13));
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
    variables.declare(
      "a",
      { text: "1" } as Expression,
      new PositionInFile(3, 13),
      null as any
    );
    variables.declare(
      "b",
      { text: "2" } as Expression,
      new PositionInFile(3, 20),
      null as any
    );
    variables.declare(
      "c",
      new Expression(),
      new PositionInFile(3, 27),
      null as any
    );
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
    const variables = createDeclaration(new PositionInFile(4, 15));
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);

    await createTestCase(code, scope);
  });

  test("simple assigment", async () => {
    const code = `
      void main() {
        a = 1;
      }
    `;
    const scope = new ScopeTree();
    const variables = createAssigment(new PositionInFile(3, 8));
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
    variables.assign(
      "a",
      { text: "1" } as Expression,
      new PositionInFile(3, 8),
      null as any
    );
    variables.assign(
      "b",
      { text: "2" } as Expression,
      new PositionInFile(3, 15),
      null as any
    );
    variables.assign(
      "c",
      { text: "3" } as Expression,
      new PositionInFile(3, 22),
      null as any
    );
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
    const variables = createAssigment(new PositionInFile(4, 10));
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);

    await createTestCase(code, scope);
  });

  test("declaration and assigment", async () => {
    const code = `
      void main() {
        {
          auto a;
          a = 1;
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration(new PositionInFile(5, 10));
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);
    // TODO
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
    const variables = createDeclaration(new PositionInFile(4, 15));
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

    await createTestCase(code, scope);
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
    const variables = createAssigment(new PositionInFile(4, 10));
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    scope.add(new CodeBlock(variables), newNode!);

    await createTestCase(code, scope);
  });
});

describe("declaration and assigment tests in loop statement", () => {
  test("declaration in for statement", async () => {
    const code = `
      void main() {
        for(auto i = 1; i < 1; i++) {
        }
      }
    `;
    const scope = new ScopeTree();
    const variables = createDeclaration(new PositionInFile(3, 17), "i");
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    const scope2 = scope.add(new CodeBlock(variables), newNode!);
    scope.add(new CodeBlock(), scope2!);

    await createTestCase(code, scope);
  });

  test("assigment in for statement", async () => {
    // TODO
    const code = `
      void main() {
        for(i = 1; i < 1; i++) {
        }
      }
    `;
    const scope = new ScopeTree();
    const newNode = scope.add(new CodeBlock(), scope.getRoot);
    const scope2 = scope.add(new CodeBlock(), newNode!);
    scope.add(new CodeBlock(), scope2!);

    await createTestCase(code, scope);
  });
});