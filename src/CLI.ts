import "reflect-metadata";
import { container } from "tsyringe";
import FileManager from "./file-system/FileManager";
import Linter from "./linter/Linter";
import WalkersHelper from "./linter/walkers/WalkersHelper";
import Controller from "./Controller";
import UndeclaredVariable from "./rules/UndeclaredVariable";
import IssuesQueue from "./linter/issue/IssuesQueue";
import CheckScope from "./rules/CheckScope";

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
