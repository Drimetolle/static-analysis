import "reflect-metadata";
import { container } from "tsyringe";
import IssuesQueue from "../linter/issue/IssuesQueue";
import Controller from "../Controller";
import SeverityConverter from "../utils/SeverityConverter";
import {
  Diagnostic,
  DiagnosticCollection,
  ExtensionContext,
  Range,
  TextDocument,
  workspace,
} from "vscode";
import InitContainer from "../ContainerIniter";
import config from "../config.json";
import { head } from "ramda";
import { existsSync, readFileSync } from "fs";
import * as path from "path";

const analyzerConfig = workspace.getConfiguration("static-analysis");
const configPathFromSettings = path.join(
  analyzerConfig.get("path-to-config") ?? "",
  "config.json"
);
const configPathFromWorkspace = path.join(
  head(workspace.workspaceFolders ?? [])?.uri.fsPath ?? "",
  "config.json"
);

if (existsSync(configPathFromSettings)) {
  const conf = readFileSync(configPathFromSettings, "utf8");
  InitContainer(JSON.parse(conf.trim()));
} else if (existsSync(configPathFromWorkspace)) {
  const conf = readFileSync(configPathFromWorkspace, "utf8");
  InitContainer(JSON.parse(conf.trim()));
} else {
  InitContainer(config);
}

export async function refreshDiagnostics(
  document: TextDocument,
  emojiDiagnostics: DiagnosticCollection
): Promise<void> {
  const firstLine = document.lineAt(0);
  const lastLine = document.lineAt(document.lineCount - 1);

  const controller = container.resolve(Controller);
  await controller.runWithContent({
    fileName: document.fileName,
    content: document.getText(
      new Range(firstLine.range.start, lastLine.range.end)
    ),
  });
  const diagnostics: Diagnostic[] = [];

  for (const issue of container.resolve(IssuesQueue).issues) {
    diagnostics.push(
      new Diagnostic(
        new Range(
          issue.link.line - 1,
          issue.link.start - 1,
          issue.link.line - 1,
          issue.link.start + (issue.line?.length ?? 1) - 1
        ),
        issue.description,
        SeverityConverter.convert(issue.severity)
      )
    );
    console.log(JSON.stringify(issue));
  }

  emojiDiagnostics.set(document.uri, diagnostics);
}

export function subscribeToDocumentChanges(
  context: ExtensionContext,
  staticDiagnostic: DiagnosticCollection
): void {
  context.subscriptions.push(
    workspace.onDidSaveTextDocument((document) =>
      refreshDiagnostics(document, staticDiagnostic)
    )
  );

  context.subscriptions.push(
    workspace.onDidCloseTextDocument((doc) => staticDiagnostic.delete(doc.uri))
  );
}
