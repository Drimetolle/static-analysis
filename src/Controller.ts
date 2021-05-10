import { singleton, container } from "tsyringe";
import FileManager from "./file-system/FileManager";
import Lexer from "./parsers/Lexer";
import Parser from "./parsers/Parser";
import DataFlowVisitor from "./visitors/DataFlowVisitor";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import WalkersHelper from "./linter/walkers/WalkersHelper";
import ProjectContext from "./linter/ProjectContext";
import LinterContext from "./linter/LinterContext";
import ScopeTree from "./source-analysis/data-flow/ScopeTree";
import MethodsVisitor from "./visitors/MethodsVisitor";
import AppConfig from "./AppConfig";

@singleton()
export default class Controller {
  private readonly config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
  }

  async run(): Promise<void> {
    let inputStream!: ANTLRInputStream;

    const fileManager = container.resolve(FileManager);
    const context = container.resolve(ProjectContext);

    let contentL;

    for (const content of fileManager.read()) {
      contentL = content;
      inputStream = new ANTLRInputStream(content.text);
    }
    console.log(contentL?.path);

    const lexer = new Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);

    const tree = parser.translationUnit();

    const visitor = new DataFlowVisitor(contentL?.path ?? "", new ScopeTree());
    const methodsVisitor = new MethodsVisitor(
      contentL?.path ?? "",
      this.config.includePath
    );

    const walkers = container.resolve(WalkersHelper);
    const scope = await walkers.analyze(visitor, tree);
    const methods = await walkers.analyze(methodsVisitor, tree);

    methods.getMethodSignature(contentL?.path ?? "", "func");

    context.create(
      new LinterContext(contentL?.path ?? "", tree, scope, methods)
    );
  }
}
