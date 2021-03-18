import "reflect-metadata";
import { container } from "tsyringe";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import Lexer from "./parsers/Lexer";
import Parser from "./parsers/Parser";
import DataFlowVisitor from "./visitors/DataFlowVisitor";
import FileManager from "./file-system/FileManager";
import { writeFileSync } from "fs";
import { join } from "path";
import Linter from "./linter/Linter";
import ProjectContext from "./linter/ProjectContext";

let inputStream!: ANTLRInputStream;

// container registration
container.register<Linter>(Linter, {
  useValue: new Linter([]),
});
container.register<FileManager>(FileManager, {
  useValue: new FileManager(),
});

const fileManager = container.resolve(FileManager);
new ProjectContext();

for (const content of fileManager.read()) {
  inputStream = new ANTLRInputStream(content);
}

const lexer = new Lexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new Parser(tokenStream);

const tree = parser.translationUnit();

const visitor = new DataFlowVisitor();
const test = visitor.visit(tree);
writeFileSync(join(__dirname, "../test-case-files/tree.json"), test.toString());
// console.log(vars);
