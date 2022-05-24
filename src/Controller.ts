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

    const walkers = container.resolve(WalkersHelper);
    const { scope, cfg } = await walkers.analyze(visitors[0], tree);

    context.create(
      new LinterContext(contentL?.path ?? "", tree, scope, cfg, null as any)
    );
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

    const walkers = container.resolve(WalkersHelper);
    const { scope, cfg } = await walkers.analyze(visitors[0], tree);

    context.create(
      new LinterContext(document.fileName, tree, scope, cfg, null as any)
    );
  }
}
