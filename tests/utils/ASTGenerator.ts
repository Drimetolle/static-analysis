import Lexer from "../../src/parsers/Lexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import Parser from "../../src/parsers/Parser";
import { TranslationUnitContext } from "../../src/grammar/CPP14Parser";

export default class ASTGenerator {
  public static fromString(input: string): TranslationUnitContext {
    const lexer = new Lexer(CharStreams.fromString(input));
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);

    return parser.translationUnit();
  }
}
