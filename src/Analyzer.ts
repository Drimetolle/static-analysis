import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import Lexer from "./parsers/Lexer";
import Parser from "./parsers/Parser";
import Listener from "./parsers/Listener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { CGrammarListener } from "./grammar/CGrammarListener";

const inputStream = new ANTLRInputStream(`
int main (void) {
    int z, x = 10 + 13;
}
`);

const lexer = new Lexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new Parser(tokenStream);

const tree = parser.compilationUnit();
const a = tree.toStringTree(parser.ruleNames);

const listener: CGrammarListener = new Listener();
ParseTreeWalker.DEFAULT.walk(listener, tree);

export default a;
