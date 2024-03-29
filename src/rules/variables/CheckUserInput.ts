import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import LinearBlock from "../../source-analysis/control-flow/blocks/LinearBlock";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import {
  ConditionContext,
  ExpressionStatementContext,
  InitializerListContext,
  UnqualifiedIdContext,
} from "../../grammar/CPP14Parser";
import IfBlock from "../../source-analysis/control-flow/blocks/IfBlock";
import { ScopeNode } from "../../source-analysis/data-flow/ScopeTree";
import { isEmpty } from "ramda";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import ExpressionVisitor from "../../visitors/ExpressionVisitor";

enum VariableState {
  Checked = "Checked",
  Unchecked = "Unchecked",
  NotUsed = "NotUsed",
}

class Variable {
  readonly name: string;
  private _state: VariableState;

  get state(): VariableState {
    return this._state;
  }

  set state(value: VariableState) {
    switch (this._state) {
      case VariableState.Checked:
        break;
      case VariableState.Unchecked:
        this._state = value;
        break;
      case VariableState.NotUsed:
        this._state = value;
        break;
    }
  }

  constructor(name: string) {
    this.name = name;
    this._state = VariableState.NotUsed;
  }
}

interface VariableFilledFromUser {
  variables: Array<Variable>;
  scope: ScopeNode;
  ast: ParserRuleContext;
}

interface UsedVariables {
  vars: VariableFilledFromUser;
  identifiers: Array<string>;
}

class IdentifierListener implements CPP14ParserListener {
  private readonly wrapper: { variable?: string };
  constructor(variables: { variable?: string }) {
    this.wrapper = variables;
  }

  enterUnqualifiedId(ctx: UnqualifiedIdContext) {
    this.wrapper.variable = ctx.Identifier()?.text;
  }
}

class FunctionCallListener implements CPP14ParserListener {
  private readonly variables: Array<string>;

  constructor(variables: Array<string>) {
    this.variables = variables;
  }

  enterInitializerList(ctx: InitializerListContext) {
    let callArguments = ctx.initializerClause();
    callArguments = callArguments.slice(1, callArguments.length);

    for (const argument of callArguments) {
      const wrapper = {} as { variable?: string };
      const listener = new IdentifierListener(wrapper);
      ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, argument);

      if (wrapper.variable) {
        this.variables.push(wrapper.variable);
      }
    }
  }
}

export default class CheckUserInput extends Rule {
  run(context: LinterContext): Array<Report> {
    const reports = new Array<Report>();
    const vars = new Array<VariableFilledFromUser>();

    for (const block of CheckUserInput.visitLinearBlocks(context.cfg)) {
      if (block.ast.text.indexOf("scanf") >= 0) {
        const variables = new Array<string>();
        const listener = new FunctionCallListener(variables);
        ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, block.ast);

        if (block.scope) {
          vars.push({
            variables: variables.map((variable) => new Variable(variable)),
            scope: block.scope,
            ast: block.ast,
          });
        }
      } else if (block instanceof IfBlock) {
        const visitor = new ExpressionVisitor();
        const checkedVariables = visitor.getAllUsedVariablesInExpression(
          (block.condition as ConditionContext)?.expression()
        );

        for (const variableWrapper of vars) {
          for (const variable of variableWrapper.variables) {
            if (checkedVariables.indexOf(variable.name) >= 0) {
              variable.state = VariableState.Checked;
            }
          }
        }
      } else {
        CheckUserInput.setUncheckedIfVariableUseInStatement(block.ast, vars);
      }
    }

    for (const variable of vars) {
      reports.push(
        ...variable.variables
          .filter((v) => v.state == VariableState.Unchecked)
          .map(
            (id) =>
              new Report(
                `Unchecked user input in variable: ${id.name}.`,
                variable.ast
              )
          )
      );
    }

    return reports;
  }

  private static setUncheckedIfVariableUseInStatement(
    ast: ParserRuleContext,
    vars: Array<VariableFilledFromUser>
  ): Array<Variable> {
    const result = new Array<Variable>();
    const visitor = new ExpressionVisitor();

    if (isEmpty(vars)) {
      return [];
    }

    if (ast instanceof ExpressionStatementContext) {
      const parameters =
        visitor.tryGetFunctionCallExpression(ast)?.parameters ?? [];

      const assigmentExpressions = visitor.tryGetAssignmentExpression(ast);

      for (const variableWrapper of vars) {
        for (const variable of variableWrapper.variables) {
          if (parameters?.indexOf(variable.name) >= 0) {
            variable.state = VariableState.Checked;
            variableWrapper.ast = ast;
            result.push(variable);
          }

          for (const assigment of assigmentExpressions) {
            if (assigment.assigmentVariable == variable.name) {
              variable.state = VariableState.Checked;
            } else if (
              assigment.usedVariablesInExpression.indexOf(variable.name) >= 0
            ) {
              variable.state = VariableState.Unchecked;
              variableWrapper.ast = assigment.sourceExpression;
            }
          }
        }
      }
    }

    return result;
  }

  private static visitLinearBlocks(
    cfg: BasicBlock,
    result: Array<BasicBlock> = []
  ): Array<BasicBlock> {
    for (const block of cfg.blocks) {
      if (block instanceof LinearBlock) {
        result.push(block);
      }
      if (block instanceof IfBlock) {
        result.push(block);
      }

      CheckUserInput.visitLinearBlocks(block, result);
    }

    return result;
  }
}
