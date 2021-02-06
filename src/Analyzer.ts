import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import Lexer from "./parsers/Lexer";
import Parser from "./parsers/Parser";

const inputStream = new ANTLRInputStream("1+3\n");
const lexer = new Lexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new Parser(tokenStream);

const tree = parser.prog();
const a = tree.toStringTree(parser.ruleNames);

export default a;
