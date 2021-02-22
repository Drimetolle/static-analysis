import "reflect-metadata";
import { container } from "tsyringe";
import DeclaredVariablesInScope from "./source-code/DeclaredVariablesInScope";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import Lexer from "./parsers/Lexer";
import Parser from "./parsers/Parser";
import Listener from "./parsers/Listener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { CPP14ParserListener } from "./grammar/CPP14ParserListener";
import { Tree } from "./utils/ScopeTree";
import DataFlowVisitor from "./visitors/DataFlowVisitor";
import FileManager from "./file-system/FileManager";
import { writeFileSync } from "fs";
import { join } from "path";

let inputStream!: ANTLRInputStream;

container.register<FileManager>(FileManager, {
  useValue: new FileManager(),
});

const fileManager = container.resolve(FileManager);

for (const content of fileManager.read()) {
  inputStream = new ANTLRInputStream(content);
}

const lexer = new Lexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new Parser(tokenStream);

const tree = parser.translationUnit();

const a = tree.toStringTree(parser.ruleNames);
// console.log(a);

const listener: CPP14ParserListener = new Listener();
ParseTreeWalker.DEFAULT.walk(listener, tree);
const vars = container.resolve(DeclaredVariablesInScope);
const visitor = new DataFlowVisitor();
const test = visitor.visit(tree);
console.log(join(__dirname, "../../test-case-files"));
writeFileSync(join(__dirname, "../test-case-files/tree.json"), test.toString());
// console.log(vars);
