/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

/** To demonstrate code actions associated with Diagnostics problems, this file provides a mock diagnostics entries. */
import "reflect-metadata";
import { container } from "tsyringe";
import * as vscode from "vscode";
import Linter from "../linter/Linter";
import AllRules from "../rules";
import FileManager from "../file-system/FileManager";
import WalkersHelper from "../linter/walkers/WalkersHelper";
import IssuesQueue from "../linter/issue/IssuesQueue";
import Controller from "../Controller";

/** Code that is used to associate diagnostic entries with code actions. */
export const EMOJI_MENTION = "emoji_mention";

container.register<Linter>(Linter, {
  useValue: new Linter(AllRules, {
    rules: {},
  }),
});
container.register<FileManager>(FileManager, {
  useValue: new FileManager(),
});
container.register<WalkersHelper>(WalkersHelper, {
  useValue: new WalkersHelper(),
});

/**
 * Analyzes the text document for problems.
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param emojiDiagnostics diagnostic collection
 */
export async function refreshDiagnostics(
  doc: vscode.TextDocument,
  emojiDiagnostics: vscode.DiagnosticCollection
): Promise<void> {
  const controller = container.resolve(Controller);
  await controller.run();
  const diagnostics: vscode.Diagnostic[] = [];

  for (const issue of container.resolve(IssuesQueue).issues) {
    diagnostics.push(
      new vscode.Diagnostic(
        new vscode.Range(
          issue.link.line - 1,
          issue.link.start - 1,
          issue.link.line - 1,
          issue.link.start + (issue.line?.length ?? 1) - 1
        ),
        issue.description,
        vscode.DiagnosticSeverity.Warning
      )
    );
    console.log(JSON.stringify(issue));
  }

  emojiDiagnostics.set(doc.uri, diagnostics);
}

export function subscribeToDocumentChanges(
  context: vscode.ExtensionContext,
  emojiDiagnostics: vscode.DiagnosticCollection
): void {
  // context.subscriptions.push(
	// 	vscode.workspace.onDidOpenTextDocument(document => {
	// 		refreshDiagnostics(document, emojiDiagnostics);
	// 	})
	// );
  context.subscriptions.push(
    vscode.workspace.onDidSaveTextDocument((document) =>
      refreshDiagnostics(document, emojiDiagnostics)
    )
  );
  // context.subscriptions.push(
  //   vscode.workspace.onDidChangeTextDocument((e) =>
  //     refreshDiagnostics(e.document, emojiDiagnostics)
  //   )
  // );
  context.subscriptions.push(
    vscode.workspace.onDidCloseTextDocument((doc) =>
      emojiDiagnostics.delete(doc.uri)
    )
  );
}
