import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import CodeBlock from "../../src/source-analysis/data-objects/CodeBlock";
import { createTestCase } from "./ScopeTests";
import DeclaredVariablesInScope from "../../src/source-analysis/data-flow/DeclaredVariablesInScope";
import Expression from "../../src/source-analysis/data-objects/Expression";
import { TypeSpecifier } from "../../src/source-analysis/data-objects/LanguageKeyWords";

function createIntegerDeclaration(name = "a", expression = "1") {
  const variables = new DeclaredVariablesInScope();
  variables.declare(
    name,
    name,
    { text: expression } as Expression,
    null as any,
    TypeSpecifier.INT
  );
  return variables;
}

async function checkDeclaration(code: string) {
  const scope = new ScopeTree();
  const variables = createIntegerDeclaration("a", "");
  scope.add(new CodeBlock(variables), scope.getRoot);

  await createTestCase(code, scope);
}

describe("Parameter declaration tests", () => {
  test("simple declaration", async () => {
    await checkDeclaration(`
      void main(int &a) {
      }
    `);
  });

  test("declaration with reference", async () => {
    await checkDeclaration(`
      void main(int &a) {
      }
    `);
  });

  test("declaration with multiple references", async () => {
    await checkDeclaration(`
      void main(int &&a) {
      }
    `);
  });

  test("declaration with pointer", async () => {
    await checkDeclaration(`
      void main(int *a) {
      }
    `);
  });

  test("declaration with multiple pointer", async () => {
    await checkDeclaration(`
      void main(int **a) {
      }
    `);
  });

  test("declaration with multiple pointers", async () => {
    await checkDeclaration(`
      void main(int **a) {
      }
    `);
  });

  test("declaration with pointer and reference", async () => {
    await checkDeclaration(`
      void main(int *&a) {
      }
    `);
  });

  test("declaration with const specifier", async () => {
    await checkDeclaration(`
      void main(const int a) {
      }
    `);
  });

  test("declaration with const and static specifier", async () => {
    await checkDeclaration(`
      void main(const static int a) {
      }
    `);
  });

  test("declaration with const and reference specifier", async () => {
    await checkDeclaration(`
      void main(const int &a) {
      }
    `);
  });

  test("declaration with const and pointer specifier", async () => {
    await checkDeclaration(`
      void main(const int *a) {
      }
    `);
  });

  test("declaration with braces", async () => {
    await checkDeclaration(`
      void main(int a[]) {
      }
    `);
  });

  test("declaration with multiple braces", async () => {
    await checkDeclaration(`
      void main(int a[][]) {
      }
    `);
  });

  test("declaration with pointer braces", async () => {
    await checkDeclaration(`
      void main(int *a[]) {
      }
    `);
  });

  test("declaration with pointer multiple braces", async () => {
    await checkDeclaration(`
      void main(int *a[][]) {
      }
    `);
  });

  test("declaration with reference braces", async () => {
    await checkDeclaration(`
      void main(int &a[]) {
      }
    `);
  });

  test("declaration with reference multiple braces", async () => {
    await checkDeclaration(`
      void main(int &a[][]) {
      }
    `);
  });

  test("declaration with const braces", async () => {
    await checkDeclaration(`
      void main(const int a[]) {
      }
    `);
  });

  test("declaration with const multiple braces", async () => {
    await checkDeclaration(`
      void main(const int a[][]) {
      }
    `);
  });
});
