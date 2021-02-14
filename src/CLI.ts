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
import Visitor from "./visitors/Visitor";
import FileManager from "./file-system/FileManager";

let inputStream!: ANTLRInputStream;

for (const content of new FileManager().read()) {
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
const visitor = new Visitor();
const test = visitor.visit(tree);
// console.log(test.toString());
// console.log(vars);
