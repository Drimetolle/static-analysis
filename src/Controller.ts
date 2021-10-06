import { singleton, container } from "tsyringe";
import FileManager from "./file-system/FileManager";
import Lexer from "./parsers/Lexer";
import Parser from "./parsers/Parser";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import WalkersHelper from "./linter/walkers/WalkersHelper";
import ProjectContext from "./linter/ProjectContext";
import LinterContext from "./linter/LinterContext";
import AppConfig from "./AppConfig";
import { CodePointCharStream } from "antlr4ts/CodePointCharStream";
import Linter from "./linter/Linter";
import DataFlowVisitorFactory from "./visitors/DataFlowVisitorFactory";

@singleton()
export default class Controller {
  private readonly config: AppConfig;
  private readonly dataFlowFactory: DataFlowVisitorFactory;

  constructor(config: AppConfig, dataFlowFactory: DataFlowVisitorFactory) {
    this.config = config;
    this.dataFlowFactory = dataFlowFactory;
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

    const visitors = this.dataFlowFactory.createVisitorsForFiles([
      contentL?.path ?? "",
    ]);

    // const methodsVisitor = new MethodsVisitor(
    //   contentL?.path ?? "",
    //   this.config.includePath
    // );

    const walkers = container.resolve(WalkersHelper);
    const { scope, cfg } = await walkers.analyze(visitors[0], tree);
    // const methods = await walkers.analyze(methodsVisitor, tree);
    // console.log(scope.isDefined(cfg.blocks[0].blocks[0].blocks[0].scope!, "b"));
    // console.log(
    //   JsonFormatter.ScopeToJson(cfg.blocks[0].blocks[0].scope as any)
    // );
    // console.log(JsonFormatter.CFGToJson(cfg.blocks[0]));

    // console.log(JsonFormatter.ScopeToJson(scope));

    // methods.getMethodSignature(contentL?.path ?? "", "func");
    context.create(
      new LinterContext(contentL?.path ?? "", tree, scope, cfg, null as any)
    );

    // linter.start(new LinterContext(contentL?.path ?? "", tree, scope, methods));
  }

  async runWithContent(document: {
    content: string;
    fileName: string;
  }): Promise<void> {
    const linter = container.resolve(Linter);
    const context = container.resolve(ProjectContext);

    const lexer = new Lexer(CharStreams.fromString(document.content));
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);

    const tree = parser.translationUnit();

    const visitors = this.dataFlowFactory.createVisitorsForFiles([
      document.fileName,
    ]);

    // const methodsVisitor = new MethodsVisitor(
    //   contentL?.path ?? "",
    //   this.config.includePath
    // );

    const walkers = container.resolve(WalkersHelper);
    const { scope, cfg } = await walkers.analyze(visitors[0], tree);
    // const methods = await walkers.analyze(methodsVisitor, tree);
    // console.log(scope.isDefined(cfg.blocks[0].blocks[0].blocks[0].scope!, "b"));
    // console.log(
    //   JsonFormatter.ScopeToJson(cfg.blocks[0].blocks[0].scope as any)
    // );
    // console.log(JsonFormatter.CFGToJson(cfg.blocks[0]));

    // console.log(JsonFormatter.ScopeToJson(scope));

    // methods.getMethodSignature(contentL?.path ?? "", "func");
    context.create(
      new LinterContext(document.fileName, tree, scope, cfg, null as any)
    );

    // linter.start(new LinterContext(contentL?.path ?? "", tree, scope, methods));
  }
}
