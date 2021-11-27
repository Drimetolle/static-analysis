import Rule from "../../linter/Rule";
import LinterContext from "../../linter/LinterContext";
import Report from "../../linter/issue/Report";
import LinearBlock from "../../source-analysis/control-flow/blocks/LinearBlock";
import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import { CPP14ParserListener } from "../../grammar/CPP14ParserListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import {
  ExpressionStatementContext,
  InitializerListContext,
  UnqualifiedIdContext,
} from "../../grammar/CPP14Parser";
import IfBlock from "../../source-analysis/control-flow/blocks/IfBlock";
import { ScopeNode } from "../../source-analysis/data-flow/ScopeTree";
import { difference, intersection, isEmpty, not } from "ramda";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import ExpressionVisitor from "../../visitors/ExpressionVisitor";

interface VarsAndScope {
  variables: Array<string>;
  scope: ScopeNode;
  ast: ParserRuleContext;
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
    const vars = new Array<VarsAndScope>();

    for (const block of CheckUserInput.visitLinearBlocks(context.cfg)) {
      if (block.ast.text.indexOf("scanf") >= 0) {
        const variables = new Array<string>();
        const listener = new FunctionCallListener(variables);
        ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, block.ast);

        if (block.scope) {
          vars.push({ variables, scope: block.scope, ast: block.ast });
        }
      } else {
        const usedVariables = CheckUserInput.checkVariableUseInStatement(
          block.ast,
          vars
        );
        usedVariables.map((variable) => variable.vars);

        for (const variable of usedVariables) {
          const uncheckedVariables = vars[vars.indexOf(variable.vars)];
          uncheckedVariables.variables = difference(
            uncheckedVariables.variables,
            variable.identifiers
          );

          vars[vars.indexOf(variable.vars)] = uncheckedVariables;
        }
      }
    }

    for (const variable of vars) {
      reports.push(
        ...variable.variables.map(
          (id) =>
            new Report(`Unchecked user input in variable: ${id}.`, variable.ast)
        )
      );
    }

    return reports;
  }

  private static checkVariableUseInStatement(
    ast: ParserRuleContext,
    vars: Array<VarsAndScope>
  ): Array<{ vars: VarsAndScope; identifiers: Array<string> }> {
    const result = new Array<any>();
    const visitor = new ExpressionVisitor();

    if (isEmpty(vars)) {
      return [];
    }

    if (ast instanceof ExpressionStatementContext) {
      const parameters = visitor.tryGetFunctionCallExpression(ast)?.parameters;

      for (const variable of vars) {
        const usedVariables = intersection(
          variable.variables,
          parameters ?? []
        );

        if (not(isEmpty(usedVariables))) {
          result.push({ vars: variable, identifiers: usedVariables });
        }
      }
    }

    return result;
  }

  private static clearCheckedVariables(
    variables: Map<string, boolean>
  ): Array<string> {
    return new Array(...variables.entries())
      .filter((variable) => !variable[1])
      .map((variable) => variable[0]);
  }

  private static walkByCfgToCheckUserInput(
    cfg: BasicBlock,
    variables: Array<string>,
    result: Map<string, boolean> = new Map<string, boolean>(
      variables.map((variable) => [variable, false])
    )
  ): any {
    for (const block of cfg.blocks) {
      if (block instanceof IfBlock) {
        const checkedVars = variables
          .map((variable) => {
            return {
              variable,
              isCheck: block.condition?.text.indexOf(variable) ?? false,
            };
          })
          .filter((variable) => !variable.isCheck);

        for (const { variable } of checkedVars) {
          result.set(variable, true);
        }
      }
      CheckUserInput.walkByCfgToCheckUserInput(block, variables);
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
      CheckUserInput.visitLinearBlocks(block, result);
    }

    return result;
  }
}
