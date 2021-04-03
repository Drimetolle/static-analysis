import { singleton, container } from "tsyringe";
import FileManager from "./file-system/FileManager";
import Lexer from "./parsers/Lexer";
import Parser from "./parsers/Parser";
import DataFlowVisitor from "./visitors/DataFlowVisitor";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import WalkersHelper from "./linter/walkers/WalkersHelper";
import ProjectContext from "./linter/ProjectContext";
import LinterContext from "./linter/LinterContext";
import ScopeTree, { Scope } from "./source-analysis/data-flow/ScopeTree";
import MethodsVisitor from "./visitors/MethodsVisitor";

@singleton()
export default class Controller {
  async run(): Promise<void> {
    let inputStream!: ANTLRInputStream;

    const fileManager = container.resolve(FileManager);
    const context = container.resolve(ProjectContext);

    let contentL;

    for (const content of fileManager.read()) {
      contentL = content;
      inputStream = new ANTLRInputStream(content.text);
    }

    const lexer = new Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);

    const tree = parser.translationUnit();

    const visitor = new DataFlowVisitor(contentL?.path ?? "", new ScopeTree());
    const methodsVisitor = new MethodsVisitor(contentL?.path ?? "");

    const walkers = container.resolve(WalkersHelper);
    const scope = await walkers.analyze(visitor, tree);
    const methods = await walkers.analyze(methodsVisitor, tree);

    context.create(
      new LinterContext(contentL?.path ?? "", tree, scope as Scope, methods)
    );
  }
}
