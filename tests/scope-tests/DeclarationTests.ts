import ScopeTree from "../../src/source-analysis/data-flow/ScopeTree";
import CodeBlock from "../../src/source-analysis/data-objects/CodeBlock";
import { createTestCase } from "./ScopeTests";
import DeclaredVariablesInScope from "../../src/source-analysis/data-flow/DeclaredVariablesInScope";
import VariableDeclaration from "../../src/source-analysis/data-objects/VariableDeclaration";
import { DeclarationSpecifier } from "../../src/source-analysis/data-objects/DeclarationSpecifier";

function createIntegerDeclaration(
  name = "a",
  specifiers: Array<DeclarationSpecifier>
) {
  const variables = new DeclaredVariablesInScope();
  variables.declare(
    new VariableDeclaration(name, undefined as any).addSpecifier(...specifiers)
  );
  return variables;
}

export async function checkDeclaration(
  code: string,
  specifiers: Array<DeclarationSpecifier> = []
) {
  const scope = new ScopeTree();
  const variables = createIntegerDeclaration("a", specifiers);
  scope.add(new CodeBlock(variables), scope.getRoot);

  await createTestCase(code, scope);
}

describe("Declaration tests", () => {
  test.each([
    [
      `
      void main(int a) {
      }
    `,
    ],
    [
      `
      void main() {
        int a;
      }
    `,
    ],
  ])("simple declaration", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int &a) {
      }
    `,
    ],
    [
      `
      void main() {
        int &a;
      }
    `,
    ],
  ])("declaration with reference", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int &&a) {
      }
    `,
    ],
    [
      `
      void main() {
        int &&a;
      }
    `,
    ],
  ])("declaration with multiple references", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int *a) {
      }
    `,
    ],
    [
      `
      void main() {
        int *a;
      }
    `,
    ],
  ])("declaration with pointer", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int **a) {
      }
    `,
    ],
    [
      `
      void main() {
        int **a;
      }
    `,
    ],
  ])("declaration with multiple pointer", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int **a) {
      }
    `,
    ],
    [
      `
      void main() {
        int **a;
      }
    `,
    ],
  ])("declaration with multiple pointers", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int *&a) {
      }
    `,
    ],
    [
      `
      void main() {
        int *&a;
      }
    `,
    ],
  ])("declaration with pointer and reference", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(const int a) {
      }
    `,
    ],
    [
      `
      void main() {
        const int a;
      }
    `,
    ],
  ])("declaration with const specifier", async (code) => {
    await checkDeclaration(code, [DeclarationSpecifier.Const]);
  });

  test.each([
    [
      `
      void main(const static int a) {
      }
    `,
    ],
    [
      `
      void main() {
        const static int a;
      }
    `,
    ],
  ])("declaration with const and static specifier", async (code) => {
    await checkDeclaration(code, [
      DeclarationSpecifier.Const,
      DeclarationSpecifier.Static,
    ]);
  });

  test.each([
    [
      `
      void main(const int &a) {
      }
    `,
    ],
    [
      `
      void main() {
        const int &a;
      }
    `,
    ],
  ])("declaration with const and reference specifier", async (code) => {
    await checkDeclaration(code, [DeclarationSpecifier.Const]);
  });

  test.each([
    [
      `
      void main(const int *a) {
      }
    `,
    ],
    [
      `
      void main() {
        const int *a;
      }
    `,
    ],
  ])("declaration with const and pointer specifier", async (code) => {
    await checkDeclaration(code, [DeclarationSpecifier.Const]);
  });

  test.each([
    [
      `
      void main(int a[]) {
      }
    `,
    ],
    [
      `
      void main() {
        int a[];
      }
    `,
    ],
  ])("declaration with braces", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int a[][]) {
      }
    `,
    ],
    [
      `
      void main() {
        int a[][];
      }
    `,
    ],
  ])("declaration with multiple braces", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int *a[]) {
      }
    `,
    ],
    [
      `
      void main() {
        int *a[];
      }
    `,
    ],
  ])("declaration with pointer braces", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int *a[][]) {
      }
    `,
    ],
    [
      `
      void main() {
        int *a[][];
      }
    `,
    ],
  ])("declaration with pointer multiple braces", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int &a[]) {
      }
    `,
    ],
    [
      `
      void main() {
        int &a[];
      }
    `,
    ],
  ])("declaration with reference braces", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(int &a[][]) {
      }
    `,
    ],
    [
      `
      void main() {
        int &a[][];
      }
    `,
    ],
  ])("declaration with reference multiple braces", async (code) => {
    await checkDeclaration(code);
  });

  test.each([
    [
      `
      void main(const int a[]) {
      }
    `,
    ],
    [
      `
      void main() {
        const int a[];
      }
    `,
    ],
  ])("declaration with const braces", async (code) => {
    await checkDeclaration(code, [DeclarationSpecifier.Const]);
  });

  test.each([
    [
      `
      void main(const int a[][]) {
      }
    `,
    ],
    [
      `
      void main() {
        const int a[][];
      }
    `,
    ],
  ])("declaration with const multiple braces", async (code) => {
    await checkDeclaration(code, [DeclarationSpecifier.Const]);
  });
});
