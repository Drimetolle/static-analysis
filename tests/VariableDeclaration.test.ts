import DeclaredVariablesInScope from "../src/source-analysis/data-flow/DeclaredVariablesInScope";
import PositionInFile from "../src/source-analysis/data-objects/PositionInFile";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { VariableState } from "../src/source-analysis/data-objects/VariableDeclaration";
import VariableAlreadyDefinedException from "../src/exceptions/VariableAlreadyDefinedException";
import Expression from "../src/source-analysis/data-objects/Expression";

describe("checking the context was work correctly", () => {
  let variables: DeclaredVariablesInScope;
  let expression: Expression;
  let position: PositionInFile;

  beforeAll(() => {
    expression = new Expression();
    position = new PositionInFile(1, 1);
  });

  beforeEach(() => {
    variables = new DeclaredVariablesInScope();
  });

  test("checking declare method if variables are empty", () => {
    const name = "a";
    variables.declare(name, expression, position, {} as ParserRuleContext);

    const declaration = variables.variables[0];

    expect(declaration).not.toBeNull();
    expect(variables.variables.length).toBe(1);
    expect(declaration.variable.state).toBe(VariableState.defined);
    expect(declaration.variable.name).toBe(name);
  });

  test("checking declare method if variables contains same variable", () => {
    const name = "a";
    variables.declare(name, expression, position, {} as ParserRuleContext);

    expect(() => {
      variables.declare(name, expression, position, {} as ParserRuleContext);
    }).toThrow(VariableAlreadyDefinedException);
  });

  test("checking assign method if variables are empty", () => {
    const name = "a";
    variables.assign(name, expression, position, {} as ParserRuleContext);

    const declaration = variables.variables[0];
    expect(declaration).not.toBeNull();
    expect(variables.variables.length).toBe(1);
    expect(declaration.variable.state).toBe(VariableState.undefined);
    expect(declaration.variable.name).toBe(name);
  });

  test("checking assign method if variables already declared", () => {
    const name = "a";
    const newExpression = new Expression();
    variables.declare(name, expression, position, {} as ParserRuleContext);
    variables.assign(name, newExpression, position, {} as ParserRuleContext);

    const declaration = variables.variables[0];

    expect(declaration).not.toBeNull();
    expect(variables.variables.length).toBe(1);
    expect(declaration.variable.state).toBe(VariableState.defined);
    expect(declaration.variable.name).toBe(name);
    expect(declaration.expression).toEqual(newExpression);
  });

  test("checking get method if variables exist", () => {
    const name = "a";
    variables.declare(name, expression, position, {} as ParserRuleContext);

    const declaration = variables.variables[0];

    expect(declaration).not.toBeNull();
    expect(declaration).toEqual(variables.getVariable(name));
  });

  test("checking get method if variables not exist", () => {
    const name = "a";

    expect(variables.getVariable(name)).toBeNull();
  });
});
