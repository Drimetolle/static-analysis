import "reflect-metadata";
import { container } from "tsyringe";
import DeclaredVariables from "./source-code/DeclaredVariables";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import Lexer from "./parsers/Lexer";
import Parser from "./parsers/Parser";
import Listener from "./parsers/Listener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { CPP14ParserListener } from "./grammar/CPP14ParserListener";

const inputStream = new ANTLRInputStream(`
int main (void) {
  int z, x, y = 10 + 13;
  x,z = 5;
}
`);

const lexer = new Lexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new Parser(tokenStream);

const tree = parser.translationUnit();

const listener: CPP14ParserListener = new Listener();
ParseTreeWalker.DEFAULT.walk(listener, tree);
const vars = container.resolve(DeclaredVariables);

// console.log(vars);

const a = tree.toStringTree(parser.ruleNames);
// console.log(a);
