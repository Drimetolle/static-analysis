import "reflect-metadata";
import { container } from "tsyringe";
import Controller from "./Controller";
import IssuesQueue from "./linter/issue/IssuesQueue";
import Formatter from "./cli-engine/Formatter";
import InitContainer from "./ContainerIniter";

/*
 * x = 1;
 * while(x <= 100) {
 *   x++;
 * }
 * x = x + 10
 * */
// const outVar = new VariableInterval(TypeSpecifier.INT, []);
// const initVar = new VariableInterval(TypeSpecifier.INT, []);
// const forStatement = new VariableInterval(TypeSpecifier.INT, []);
// const incrementVar = new VariableInterval(TypeSpecifier.INT, [
//   forStatement,
//   outVar,
// ]);
// initVar.addDependency(forStatement);
// forStatement.addDependency(incrementVar);
//
// const calculator = new IntervalWorkListAlgorithm([
//   new MutationBlock(initVar, new InitInterval(1)),
//   new MutationBlock(forStatement, new ConstraintInterval([-Infinity, 100])),
//   new MutationBlock(incrementVar, new AdditionalOnInterval(1)),
//   new MutationBlock(outVar, new ConstraintInterval([101, Infinity])),
// ]);
//
// console.log(calculator.calculate().map((v) => v.interval));

// 1: x = 0
// 2: if x == y goto 5
// 3: x = x + 1
// 4: goto 2
// 5: y = 0
// const var1 = new VariableInterval(TypeSpecifier.INT, []);
// const var2 = new VariableInterval(TypeSpecifier.INT, []);
// var1.addDependency(var2);
// const var3 = new VariableInterval(TypeSpecifier.INT, []);
// const var4 = new VariableInterval(TypeSpecifier.INT, [var2]);
// var3.addDependency(var4);
// const var5 = new VariableInterval(TypeSpecifier.INT, []);
// var2.addDependency(var3);
// var2.addDependency(var5);
//
// const calculator = new IntervalWorkListAlgorithm([
//   new MutationBlock(var1, new InitInterval(0)),
//   new MutationBlock(var2, new PassInterval(0)),
//   new MutationBlock(var3, new AdditionalOnInterval(1)),
//   new MutationBlock(var4, new PassInterval(0)),
//   new MutationBlock(var5, new PassInterval(0)),
// ]);
//
// console.log(calculator.calculate().map((v) => v.interval));

// container registration
InitContainer();

container
  .resolve(IssuesQueue)
  .subscribe((i) => console.log(Formatter.formatMessage(i)));

const controller = container.resolve(Controller);
controller.run();
