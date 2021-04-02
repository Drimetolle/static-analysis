import DeclaredVariablesInScope from "../src/source-analysis/data-flow/DeclaredVariablesInScope";
import GrammarDerivation from "../src/source-analysis/data-objects/GrammarDerivation";
import PositionInFile from "../src/source-analysis/data-objects/PositionInFile";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { VariableState } from "../src/source-analysis/data-objects/VariableDeclaration";
import VariableAlreadyDefinedException from "../src/exceptions/VariableAlreadyDefinedException";
import VariableNotDefinedException from "../src/exceptions/VariableNotDefinedException";

describe("checking the context was work correctly", () => {
  let variables: DeclaredVariablesInScope;
  let grammarDerivation: GrammarDerivation;
  let position: PositionInFile;

  beforeAll(() => {
    grammarDerivation = new GrammarDerivation(1, 1, 1, "1");
    position = new PositionInFile(1, 1);
  });

  beforeEach(() => {
    variables = new DeclaredVariablesInScope();
  });

  test("checking declare method if variables are empty", () => {
    const name = "a";
    variables.declare(
      name,
      grammarDerivation,
      position,
      {} as ParserRuleContext
    );

    const declaration = variables.variables[0];

    expect(declaration).not.toBeNull();
    expect(variables.variables.length).toBe(1);
    expect(declaration.state).toBe(VariableState.defined);
    expect(declaration.name).toBe(name);
  });

  test("checking declare method if variables contains same variable", () => {
    const name = "a";
    variables.declare(
      name,
      grammarDerivation,
      position,
      {} as ParserRuleContext
    );

    expect(() => {
      variables.declare(
        name,
        grammarDerivation,
        position,
        {} as ParserRuleContext
      );
    }).toThrow(VariableAlreadyDefinedException);
  });

  test("checking assign method if variables are empty", () => {
    const name = "a";

    expect(() => {
      variables.assign(
        name,
        grammarDerivation,
        position,
        {} as ParserRuleContext
      );
    }).toThrow(VariableNotDefinedException);
  });

  test("checking assign method if variables already declared", () => {
    const name = "a";
    variables.declare(
      name,
      grammarDerivation,
      position,
      {} as ParserRuleContext
    );
    variables.assign(
      name,
      new GrammarDerivation(1, 1, 1, "10"),
      position,
      {} as ParserRuleContext
    );

    const declaration = variables.variables[0];

    expect(declaration).not.toBeNull();
    expect(variables.variables.length).toBe(1);
    expect(declaration.state).toBe(VariableState.defined);
    expect(declaration.name).toBe(name);
    expect(declaration.expression).toBe("10");
  });

  test("checking get method if variables exist", () => {
    const name = "a";
    variables.declare(
      name,
      grammarDerivation,
      position,
      {} as ParserRuleContext
    );

    const declaration = variables.variables[0];

    expect(declaration).not.toBeNull();
    expect(declaration).toEqual(variables.getVariable(name));
  });

  test("checking get method if variables not exist", () => {
    const name = "a";

    expect(variables.getVariable(name)).toBeNull();
  });
});
