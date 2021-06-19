import { singleton, container } from "tsyringe";
import FileManager from "./file-system/FileManager";
import Lexer from "./parsers/Lexer";
import Parser from "./parsers/Parser";
import DataFlowVisitor from "./visitors/DataFlowVisitor";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import WalkersHelper from "./linter/walkers/WalkersHelper";
import ProjectContext from "./linter/ProjectContext";
import LinterContext from "./linter/LinterContext";
import ScopeTree from "./source-analysis/data-flow/ScopeTree";
import MethodsVisitor from "./visitors/MethodsVisitor";
import AppConfig from "./AppConfig";
import StartBlock from "./source-analysis/control-flow/blocks/StartBlock";
import { CodePointCharStream } from "antlr4ts/CodePointCharStream";
import Linter from "./linter/Linter";
import JsonFormatter from "./utils/json-formatters/JsonFormatter";

@singleton()
export default class Controller {
  private readonly config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
  }

  async run(): Promise<void> {
    let inputStream!: CodePointCharStream;

    const fileManager = container.resolve(FileManager);
    const context = container.resolve(ProjectContext);
    const linter = container.resolve(Linter);

    let contentL;

    for (const content of fileManager.read()) {
      contentL = content;
      inputStream = CharStreams.fromString(content.text);
    }

    const lexer = new Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);

    const tree = parser.translationUnit();

    const visitor = new DataFlowVisitor(
      contentL?.path ?? "",
      new ScopeTree(),
      new StartBlock("", 0)
    );
    const methodsVisitor = new MethodsVisitor(
      contentL?.path ?? "",
      this.config.includePath
    );

    const walkers = container.resolve(WalkersHelper);
    const scope = await walkers.analyze(visitor, tree);
    const methods = await walkers.analyze(methodsVisitor, tree);
    // console.log(JsonFormatter.ScopeToJson(scope));
    // methods.getMethodSignature(contentL?.path ?? "", "func");
    //
    context.create(
      new LinterContext(contentL?.path ?? "", tree, scope, methods)
    );

    // linter.start(new LinterContext(contentL?.path ?? "", tree, scope, methods));
  }
}
