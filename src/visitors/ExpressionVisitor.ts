import { Lifecycle, scoped } from "tsyringe";
import {
  AdditiveExpressionContext,
  AndExpressionContext,
  AssignmentExpressionContext,
  CastExpressionContext,
  ConditionalExpressionContext,
  EqualityExpressionContext,
  ExclusiveOrExpressionContext,
  ExpressionContext,
  ExpressionStatementContext,
  IdExpressionContext,
  InclusiveOrExpressionContext,
  LogicalAndExpressionContext,
  LogicalOrExpressionContext,
  MultiplicativeExpressionContext,
  PointerMemberExpressionContext,
  PostfixExpressionContext,
  PrimaryExpressionContext,
  RelationalExpressionContext,
  ShiftExpressionContext,
  UnaryExpressionContext,
  UnqualifiedIdContext,
} from "../grammar/CPP14Parser";
import { isNil } from "ramda";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export interface FunctionCallExpression {
  readonly sourceExpression: PostfixExpressionContext;
  readonly functionName: string;
  readonly parameters: Array<string>;
}

@scoped(Lifecycle.ContainerScoped)
export default class ExpressionVisitor {
  private readonly typesWalkingToFunctionCall: ReadonlyArray<{
    new (...args: any[]): ParserRuleContext;
  }>;

  private readonly typesWalkingToIdentifier: ReadonlyArray<{
    new (...args: any[]): ParserRuleContext;
  }>;

  constructor() {
    this.typesWalkingToFunctionCall = [
      AssignmentExpressionContext,
      ConditionalExpressionContext,
      LogicalOrExpressionContext,
      LogicalAndExpressionContext,
      InclusiveOrExpressionContext,
      ExclusiveOrExpressionContext,
      AndExpressionContext,
      EqualityExpressionContext,
      RelationalExpressionContext,
      ShiftExpressionContext,
      AdditiveExpressionContext,
      MultiplicativeExpressionContext,
      PointerMemberExpressionContext,
      CastExpressionContext,
      UnaryExpressionContext,
      PostfixExpressionContext,
    ];

    this.typesWalkingToIdentifier = this.typesWalkingToFunctionCall.concat([
      PrimaryExpressionContext,
      IdExpressionContext,
      UnqualifiedIdContext,
    ]);
  }

  public tryGetFunctionCallExpression(
    expressionStatement: ExpressionStatementContext
  ): FunctionCallExpression | undefined {
    const expression = expressionStatement.expression();
    if (!expression) {
      return;
    }

    if (!this.isSingleExpression(expression)) {
      return;
    }

    const postfixExpression = this.walkToPostfixExpression(expression);
    const expressionList = postfixExpression
      ?.expressionList()
      ?.initializerList()
      .initializerClause();

    if (
      postfixExpression?.LeftParen() != null &&
      expressionList != null &&
      postfixExpression?.RightParen() != null
    ) {
      return {
        sourceExpression: postfixExpression,
        functionName: postfixExpression.postfixExpression()!.text,
        parameters: expressionList
          .map((parameter) => this.walkToIdentifier(parameter))
          .filter((parameter) => !isNil(parameter))
          .map((terminalNode) => terminalNode!.text),
      };
    }
  }

  public isAssignmentExpression(
    expressionStatement: ExpressionStatementContext
  ): boolean {
    const expression = expressionStatement.expression();
    if (!expression) {
      return false;
    }

    if (!this.isSingleExpression(expression)) {
      return false;
    }

    return false;
  }

  public isSingleExpression(expression: ExpressionContext) {
    return expression.childCount <= 1;
  }

  private walkToPostfixExpression(
    expression: ParserRuleContext,
    result?: PostfixExpressionContext
  ) {
    let context;

    for (const type of this.typesWalkingToFunctionCall) {
      if ((context = expression.tryGetRuleContext(0, type))) {
        result = this.walkToPostfixExpression(context, result);
        break;
      }
    }

    if (expression instanceof PostfixExpressionContext) {
      result = expression;
      return result;
    }

    return result;
  }

  private walkToIdentifier(
    expression: ParserRuleContext,
    result?: TerminalNode
  ) {
    let context;

    for (const type of this.typesWalkingToIdentifier) {
      if ((context = expression.tryGetRuleContext(0, type))) {
        result ??= this.walkToIdentifier(context, result);
        break;
      }
    }

    if (expression instanceof UnqualifiedIdContext) {
      result = expression.Identifier();
      return result;
    }

    return result;
  }
}
