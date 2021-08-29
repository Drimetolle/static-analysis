import "reflect-metadata";
import { container } from "tsyringe";
import FileManager from "./file-system/FileManager";
import Linter from "./linter/Linter";
import WalkersHelper from "./linter/walkers/WalkersHelper";
import Controller from "./Controller";
import UndeclaredVariable from "./rules/UndeclaredVariable";
import IssuesQueue from "./linter/issue/IssuesQueue";
import CheckScope from "./rules/CheckScope";
import IntervalCalculator from "./source-analysis/interval-analysis/IntervalCalculator";
import { apply, equals, max, min } from "ramda";
import AdditionalOnInterval from "./source-analysis/interval-analysis/functions/AdditionalOnInterval";
import IntervalWorkListAlgorithm from "./source-analysis/interval-analysis/IntervalWorkListAlgorithm";
import MutationBlock from "./source-analysis/interval-analysis/MutationBlock";
import VariableInterval from "./source-analysis/interval-analysis/VariableInterval";
import { TypeSpecifier } from "./source-analysis/data-objects/LanguageKeyWords";
import InitInterval from "./source-analysis/interval-analysis/functions/InitInterval";
import PassInterval from "./source-analysis/interval-analysis/functions/PassInterval";

const calc = new IntervalCalculator();

function allPrevJoin(a: Array<[number, number]>) {}

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

/*
0 int x = 0;
1 while (true) {
2   x++;
 }
3 print(x);
 */
function worklist2() {
  const X: Array<[number, number]> = [
    [-Infinity, Infinity],
    [-Infinity, Infinity],
    [-Infinity, Infinity],
    [-Infinity, Infinity],
  ];
  const wl = [0, 1, 2, 3];
  const F: Array<(a: Array<[number, number]>) => [number, number]> = [
    // 0: Assign
    (a) => [0, 0],
    (a) => {
      return a.reduce((prev, curr) => calc.join(prev, curr), [
        -Infinity,
        Infinity,
      ]);
    },
    (a) => {
      const tmp = a.reduce((prev, curr) => calc.join(prev, curr), [
        -Infinity,
        Infinity,
      ]);
      // console.log(X, tmp);
      return [tmp[0] + 1, tmp[1] + 1];
      return [7, 7];
    },
    (a) => {
      const tmp = a.reduce((prev, curr) => calc.join(prev, curr), [
        -Infinity,
        Infinity,
      ]);

      return calc.join([tmp[1], tmp[1]], [150, 150]);
    },
  ];

  let iter = 0;
  const Y: Array<[number, number]> = [
    [-Infinity, Infinity],
    [-Infinity, Infinity],
    [-Infinity, Infinity],
    [-Infinity, Infinity],
  ];
  while (wl.length != 0) {
    const j = wl.pop()!;
    const N = F[j](X);

    if (!equals(N, X[j])) {
      // X[j] = N;
      // Widening

      const w = calc.widening(X[j], N);
      X[j] = w;

      //
      // if (j == 1 && N[1] < 10) {
      //   wl.push(2);
      // }
      //
      // if (j == 1 && !(N[1] < 10)) {
      //   wl.push(3);
      // }

      if (j == 1) {
        wl.unshift(2);
      }

      if (j == 1) {
        wl.unshift(3);
      }

      if (j == 2) {
        wl.unshift(1);
      }
      // add all the indexes that directly depend on j to WL
      // (X[k] depends on X[j] if F[k] contains X[j])
    }
    iter++;
  }

  return X;
}

function worklist3(X: Array<[number, number]>) {
  const wl = [0, 1, 2, 3];
  const F: Array<(a: Array<[number, number]>) => [number, number]> = [
    // 0: Assign
    (a) => [0, 0],
    (a) => {
      return a.reduce((prev, curr) => calc.join(prev, curr), [
        -Infinity,
        Infinity,
      ]);
    },
    (a) => {
      const tmp = a.reduce((prev, curr) => calc.join(prev, curr), [
        -Infinity,
        Infinity,
      ]);
      // console.log(X, tmp);
      return [tmp[0] + 1, tmp[1] + 1];
      return [7, 7];
    },
    (a) => {
      const tmp = a.reduce((prev, curr) => calc.join(prev, curr), [
        -Infinity,
        Infinity,
      ]);

      return [tmp[1], tmp[1]];
    },
  ];

  let iter = 0;

  while (wl.length != 0) {
    const j = wl.pop()!;
    const N = F[j](X);

    if (!equals(N, X[j])) {
      const w = calc.narrowing(X[j], N);
      X[j] = w;

      //
      // if (j == 1 && N[1] < 10) {
      //   wl.push(2);
      // }
      //
      // if (j == 1 && !(N[1] < 10)) {
      //   wl.push(3);
      // }

      if (j == 1) {
        wl.unshift(2);
      }

      if (j == 1) {
        wl.unshift(3);
      }

      if (j == 2) {
        wl.unshift(1);
      }
      // add all the indexes that directly depend on j to WL
      // (X[k] depends on X[j] if F[k] contains X[j])
    }
    iter++;
  }

  return X;
}

const widening = worklist2();
const testFunc = (a: any) => {
  const tmp = a.reduce((prev: any, curr: any) => calc.join(prev, curr), [
    -Infinity,
    Infinity,
  ]);
  // console.log(X, tmp);
  return [tmp[0] + 1, tmp[1] + 1];
  return [7, 7];
};

// console.log(widening);
// console.log(worklist3(widening));

// console.log(calc.join([1, 10], [-Infinity, Infinity]));

/*
страница 32
взять все константы из участка программы в данном случае блок while B = {-∞,0,1,7,8,∞}
y = 0; x = 8;
while (input) {
x = 7;
x = x+1;
y = y+1;
}
 * */
//file:///C:/Users/drime/Desktop/%D0%92%D0%9A%D0%A0/interval%20analisis/l7.pdf алгоритм
// Сначала идет обычный обход

const x3: [number, number] = [-Infinity, Infinity];
const B = [-Infinity, 0, 1, 7, 8, Infinity];
// console.log(test(-Infinity, Infinity));
// console.log(calc.join([0, 9], [10, Infinity]));
// console.log(calc.widening([1, 1], [-Infinity, Infinity]));
// console.log(calc.widening([0, 0], [1, 1]));
// console.log(calc.widening(x3, [3, 7]));

const x1: [number, number] = [8, 8];
const x2: [number, number] = [8, 8];

const b3: [number, number] = [8, Infinity];
const y1: [number, number] = [1, 1];
const y2: [number, number] = [1, 2];
// console.log(calc.calculatePossibleValue(b2, b3));
// console.log(calc.widening(y1, y2));
// console.log(calc.calculatePossibleValue(b2, b3));

// 1 : x = 0
// 2 : if x = y goto 5
// 3 : x = x + 1
// 4 : goto 2
// 5 : y = 0

// console.log(calc.join([1, Infinity], [7, 7]));

function test(a: number, b: number): [number, number] {
  return [
    apply<number[], number, number>(
      max,
      B.filter((v) => v <= a)
    ),
    apply<number[], number, number>(
      min,
      B.filter((v) => v >= b)
    ),
  ];
}

// console.log(calc.join([1, 1], [100, 100]));
// console.log(calc.widening([0, 3], [0, 2]));
// console.log(calc.widening([7, 7], [7, Infinity]));
// console.log(calc.widening([150, Infinity], [1, Infinity]));
// console.log(calc.widening([1, 3], x3));

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
//
// import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
//
// const fileContent = `
// FILE *\ttmpfile (void);
// char *\ttmpnam (char *);
// #if __BSD_VISIBLE || __XSI_VISIBLE || __POSIX_VISIBLE >= 200112
// char *\ttempnam (const char *, const char *) __malloc_like __result_use_check;
// #endif
// int\tfclose (FILE *);
// int\tfflush (FILE *);
// FILE *\tfreopen (const char *__restrict, const char *__restrict, FILE *__restrict);
// void\tsetbuf (FILE *__restrict, char *__restrict);
// int\tsetvbuf (FILE *__restrict, char *__restrict, int, size_t);
// int\tfprintf (FILE *__restrict, const char *__restrict, ...)
//                _ATTRIBUTE ((__format__ (__printf__, 2, 3)));
// int\tfscanf (FILE *__restrict, const char *__restrict, ...)
//                _ATTRIBUTE ((__format__ (__scanf__, 2, 3)));
// int\tprintf (const char *__restrict, ...)
//                _ATTRIBUTE ((__format__ (__printf__, 1, 2)));
// int\tscanf (const char *__restrict, ...)
//                _ATTRIBUTE ((__format__ (__scanf__, 1, 2)));
// int\tsscanf (const char *__restrict, const char *__restrict, ...)
//                _ATTRIBUTE ((__format__ (__scanf__, 2, 3)));
// int\tvfprintf (FILE *__restrict, const char *__restrict, __VALIST)
//                _ATTRIBUTE ((__format__ (__printf__, 2, 0)));
// int\tvprintf (const char *, __VALIST)
//                _ATTRIBUTE ((__format__ (__printf__, 1, 0)));
// int\tvsprintf (char *__restrict, const char *__restrict, __VALIST)
//                _ATTRIBUTE ((__format__ (__printf__, 2, 0)));
// `;
//
// const stream = new ANTLRInputStream(fileContent);
//
// const lexer = new Lexer(stream);
// const tokenStream = new CommonTokenStream(lexer);
// const parser = new Parser(tokenStream);
//
// const tree = parser.translationUnit();
//
// for (const a of tree.declarationseq()?.declaration() ?? []) {
//   if (a.blockDeclaration()) {
//     // console.log(
//     //   a.blockDeclaration()?.simpleDeclaration()?.initDeclaratorList()?.text
//     // );
//   }
// }
