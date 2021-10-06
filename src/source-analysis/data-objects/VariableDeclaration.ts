import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import Expression from "./Expression";
import Variable from "../data-flow/Variable";
import { TypeSpecifier } from "./LanguageKeyWords";

export enum VariableState {
  defined = "defined",
  undefined = "undefined",
}

export default class VariableDeclaration {
  public readonly expression: Expression;
  public readonly variable: Variable;
  public readonly node: ParserRuleContext;
  public type: TypeSpecifier;

  constructor(
    expression: Expression,
    variable: Variable,
    node: ParserRuleContext,
    type: TypeSpecifier
  ) {
    this.expression = expression;
    this.node = node;
    this.variable = variable;
    this.type = type;
  }

  public toJSON(): unknown {
    return {
      expression: this.expression.text,
      variable: this.variable,
      type: this.type,
    };
  }
}
