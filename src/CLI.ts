import "reflect-metadata";
import { container } from "tsyringe";
import FileManager from "./file-system/FileManager";
import Linter from "./linter/Linter";
import WalkersHelper from "./linter/walkers/WalkersHelper";
import Controller from "./Controller";
import UndeclaredVariable from "./rules/UndeclaredVariable";
import IssuesQueue from "./linter/issue/IssuesQueue";
import CheckScope from "./rules/CheckScope";
import AdditionalOnInterval from "./source-analysis/interval-analysis/functions/AdditionalOnInterval";
import IntervalWorkListAlgorithm from "./source-analysis/interval-analysis/IntervalWorkListAlgorithm";
import MutationBlock from "./source-analysis/interval-analysis/MutationBlock";
import VariableInterval from "./source-analysis/interval-analysis/VariableInterval";
import { TypeSpecifier } from "./source-analysis/data-objects/LanguageKeyWords";
import InitInterval from "./source-analysis/interval-analysis/functions/InitInterval";

/*
 * x = 0
 * while(x <= 150) {
 *   x++;
 * }
 * x = x + 10
 * */
const outVar = new VariableInterval(TypeSpecifier.INT, []);
const initVar = new VariableInterval(TypeSpecifier.INT, []);
const forStatement = new VariableInterval(TypeSpecifier.INT, []);
const incrementVar = new VariableInterval(TypeSpecifier.INT, [
  forStatement,
  outVar,
]);
initVar.addDependency(forStatement);
forStatement.addDependency(incrementVar);

const calculator = new IntervalWorkListAlgorithm([
  new MutationBlock(initVar, new InitInterval([0, 0])),
  new MutationBlock(forStatement, new InitInterval([150, 150])),
  new MutationBlock(incrementVar, new AdditionalOnInterval([0, 1])),
  new MutationBlock(outVar, new AdditionalOnInterval([0, 10])),
]);

console.log(calculator.calculate().map((v) => v.interval));

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
//   new MutationBlock(var1, new InitInterval([0, 0])),
//   new MutationBlock(var2, new PassInterval([0, 0])),
//   new MutationBlock(var3, new AdditionalOnInterval([0, 1])),
//   new MutationBlock(var4, new PassInterval([0, 0])),
//   new MutationBlock(var5, new PassInterval([0, 0])),
// ]);
//
// console.log(calculator.calculate().map((v) => v.interval));

// container registration
container.register<Linter>(Linter, {
  useValue: new Linter([UndeclaredVariable, CheckScope], { rules: { 1: 2 } }),
});
container.register<FileManager>(FileManager, {
  useValue: new FileManager(),
});
container.register<WalkersHelper>(WalkersHelper, {
  useValue: new WalkersHelper(),
});

container.resolve(IssuesQueue);
// .subscribe((i) => console.log(Formatter.formatMessage(i)));

const controller = container.resolve(Controller);
controller.run();
