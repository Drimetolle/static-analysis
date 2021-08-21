import PositionInFile from "./PositionInFile";
import { IHavePosition } from "./DiagnosticsInterfaceses";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import Expression from "./Expression";
import Variable from "../data-flow/Variable";
import { TypeSpecifier } from "./LanguageKeyWords";

export enum VariableState {
  defined = "defined",
  undefined = "undefined",
}

export default class VariableDeclaration implements IHavePosition {
  public readonly position: PositionInFile;
  public readonly expression: Expression;
  public readonly variable: Variable;
  public readonly node: ParserRuleContext;
  public readonly type: TypeSpecifier;

  constructor(
    position: PositionInFile,
    expression: Expression,
    variable: Variable,
    node: ParserRuleContext,
    type: TypeSpecifier
  ) {
    this.position = position;
    this.expression = expression;
    this.node = node;
    this.variable = variable;
    this.type = type;
  }

  public toJSON(): unknown {
    return {
      position: this.position,
      expression: this.expression.text,
      variable: this.variable,
      type: this.type,
    };
  }
}
