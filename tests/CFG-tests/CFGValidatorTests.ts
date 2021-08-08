import "reflect-metadata";
import CFGValidator from "../../src/source-analysis/control-flow/CFGValidator";
import OutBlock from "../../src/source-analysis/control-flow/blocks/OutBlock";
import ifExpected from "./test-cases/ifWithBraces.json";
import ifElseExpected from "./test-cases/ifElseStatement.json";
import simpleBlockExpected from "./test-cases/linearBlock.json";
import IfIfElseStatement from "./test-cases/IfIfElseStatement.json";
import IfElseStatementExpected from "./test-cases/elseIfStatement.json";
import multipleIfElseStatementExpected from "./test-cases/multipleIfElseStatement.json";
import compoundStatementExpected from "./test-cases/compoundStatement.json";
import DataFlowWalker from "../../src/visitors/DataFlowWalker";
import ConditionVisitor from "../../src/visitors/ConditionVisitor";
import BlockVisitor from "../../src/visitors/BlockVisitor";
import DeclarationVisitor from "../../src/visitors/DeclarationVisitor";
import JsonFormatter from "../../src/utils/json-formatters/JsonFormatter";
import ASTGenerator from "../../utils-for-testing/ASTGenerator";

async function createTestCase(code: string, expected: object) {
  const { cfg } = await new DataFlowWalker(
    "",
    new ConditionVisitor(new BlockVisitor()),
    new DeclarationVisitor()
  ).start(ASTGenerator.fromString(code));

  const validator = new CFGValidator(new OutBlock(0));
  const block = cfg.blocks[0];

  expect(JsonFormatter.CFGToJson(validator.validateFunction(block))).toBe(
    JSON.stringify(expected, null, 2)
  );
}

describe("cfg generator tests for if statement", () => {
  test("if else statement", async () => {
    const code = `
      void main() {
        if (true) {
          innerIf();
        }
        endBlock();
      }
    `;

    await createTestCase(code, ifExpected);
  });

  test("if else statement without braces", async () => {
    const code = `
      void main() {
        if (true)
          innerIf();
        endBlock();
      }
    `;

    await createTestCase(code, ifExpected);
  });

  test("if, else if statement", async () => {
    const code = `
      void main() {
        if (true1) {a;}
        else if (true2) {b;}
      }
    `;

    await createTestCase(code, IfElseStatementExpected);
  });

  test("if, else if, else statement", async () => {
    const code = `
      void main() {
        if (true1) {a;}
        else if (true2) {b;}
        else {c;}
      }
    `;

    await createTestCase(code, IfIfElseStatement);
  });

  test("if, else if, else statement without braces", async () => {
    const code = `
      void main() {
        if (true1) a;
        else if (true2) b;
        else c;
      }
    `;

    await createTestCase(code, IfIfElseStatement);
  });

  test("multiple else if else statement", async () => {
    const code = `
      void main() {
        if (true1) a;
        else if (true2) b;
        else if (true3) c;
        else d;
      }
    `;

    await createTestCase(code, multipleIfElseStatementExpected);
  });

  test("if else statement without braces", async () => {
    const code = `
      void main() {
        if (true) a;
        else c;
      }
    `;

    await createTestCase(code, ifElseExpected);
  });

  test("if else statement", async () => {
    const code = `
      void main() {
        if (true) {a;}
        else {c;}
      }
    `;

    await createTestCase(code, ifElseExpected);
  });
});

describe("cfg generator tests for block statement", () => {
  test("simple block", async () => {
    const code = `
      void main() {
        int a = 1;
        a = 5;
        a();
      }
    `;

    await createTestCase(code, simpleBlockExpected);
  });

  test("compound statement", async () => {
    const code = `
      void main() {
        {
            ex();
        }
        endBlock();
      }
    `;

    await createTestCase(code, compoundStatementExpected);
  });
});

// describe("cfg generator tests for switch statement", () => {
//   test("switch with default", async () => {
//     const code = `
//       void main() {
//         switch(s) {
//             case 1: {a();}
//             case 2: case 3: {b();}
//             default: {c();}
//         }
//         endBlock();
//       }
//     `;
//
//     await createTestCase(code, switchStatementExpected);
//   });
//
//   test("switch without braces", async () => {
//     const code = `
//       void main() {
//         switch(s) {
//             case 1: a();
//             case 2: case 3: b();
//             default: c();
//         }
//         endBlock();
//       }
//     `;
//
//     await createTestCase(code, switchStatementExpected);
//   });
//
//   test("switch without braces", async () => {
//     const code = `
//       void main() {
//         switch(s) {
//             case 1: a();
//             case 2: case 3: b();
//             default: c();
//         }
//         endBlock();
//       }
//     `;
//
//     await createTestCase(code, switchWithoutDefaultCaseStatementExpected);
//   });
// });
