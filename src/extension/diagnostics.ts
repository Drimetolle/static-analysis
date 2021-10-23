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

InitContainer();

export async function refreshDiagnostics(
  document: TextDocument,
  emojiDiagnostics: DiagnosticCollection
): Promise<void> {
  console.log("event");
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
  // context.subscriptions.push(
  // 	workspace.onDidOpenTextDocument(document => {
  // 		refreshDiagnostics(document, staticDiagnostic);
  // 	})
  // );
  context.subscriptions.push(
    workspace.onDidSaveTextDocument((document) =>
      refreshDiagnostics(document, staticDiagnostic)
    )
  );
  // context.subscriptions.push(
  //   workspace.onDidChangeTextDocument((e) =>
  //     refreshDiagnostics(e.document, staticDiagnostic)
  //   )
  // );
  context.subscriptions.push(
    workspace.onDidCloseTextDocument((doc) => staticDiagnostic.delete(doc.uri))
  );
}
