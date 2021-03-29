import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import Lexer from "../parsers/Lexer";
import Parser from "../parsers/Parser";
import { container } from "tsyringe";
import FileManager from "../file-system/FileManager";
import { workspace } from "vscode";

container.register<FileManager>(FileManager, {
  useValue: new FileManager(workspace.rootPath ?? "C:\\"),
});

let inputStream!: ANTLRInputStream;
const fileManager = container.resolve(FileManager);

for (const content of fileManager.read()) {
  inputStream = new ANTLRInputStream(content.text);
}

const lexer = new Lexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new Parser(tokenStream);

const tree = parser.translationUnit();
const a = tree.toStringTree(parser.ruleNames);

export default a;
