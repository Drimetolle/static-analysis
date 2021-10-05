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
import Formatter from "../cli-engine/Formatter";
import Controller from "../Controller";

/** Code that is used to associate diagnostic entries with code actions. */
export const EMOJI_MENTION = "emoji_mention";

/** String to detect in the text document. */
const EMOJI = "emoji";

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

  // for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
  const lineOfText = doc.lineAt(103);
  // if (lineOfText.text.includes(EMOJI)) {
  const test = container.resolve(IssuesQueue).issues[0];
  diagnostics.push(
    new vscode.Diagnostic(
      new vscode.Range(
        test.link.line - 1,
        test.link.start - 1,
        test.link.line - 1,
        test.link.start + (test.line?.length ?? 1)
      ),
      "When you say 'emoji', do you want to find out more?",
      vscode.DiagnosticSeverity.Information
    )
  );
  console.log(
    JSON.stringify(doc.lineAt(test.link.line - 1)),
    test.link.line - 1,
    
  );
  // }
  // }

  // for (const issue of container.resolve(IssuesQueue).issues) {
  //   console.log(issue.link.start);
  //   diagnostics.push(
  //     createDiagnostic(doc, doc.lineAt(issue.link.start), issue.link.start)
  //   );
  // }

  emojiDiagnostics.set(doc.uri, diagnostics);
}

// export function refreshDiagnostics(
//   doc: vscode.TextDocument,
//   emojiDiagnostics: vscode.DiagnosticCollection
// ): void {
//   const controller = container.resolve(Controller);
//   const diagnostics: vscode.Diagnostic[] = [];
//
//   container.resolve(IssuesQueue).subscribe((i) => {
//     diagnostics.push(createDiagnostic(doc, doc.lineAt(1), 1));
//     console.log(Formatter.formatMessage(i));
//   });
//
//   controller.run();
//
//   emojiDiagnostics.set(doc.uri, diagnostics);
// }

function createDiagnostic(
  doc: vscode.TextDocument,
  lineOfText: vscode.TextLine,
  lineIndex: number
): vscode.Diagnostic {
  // find where in the line of thet the 'emoji' is mentioned
  const index = lineOfText.text.indexOf(EMOJI);

  // create range that represents, where in the document the word is
  const range = new vscode.Range(
    lineIndex,
    index,
    lineIndex,
    index + EMOJI.length
  );

  const diagnostic = new vscode.Diagnostic(
    range,
    "When you say 'emoji', do you want to find out more?",
    vscode.DiagnosticSeverity.Information
  );
  diagnostic.code = EMOJI_MENTION;
  return diagnostic;
}

export function subscribeToDocumentChanges(
  context: vscode.ExtensionContext,
  emojiDiagnostics: vscode.DiagnosticCollection
): void {
  if (vscode.window.activeTextEditor) {
    refreshDiagnostics(
      vscode.window.activeTextEditor.document,
      emojiDiagnostics
    );
  }
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor) {
        refreshDiagnostics(editor.document, emojiDiagnostics);
      }
    })
  );

  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument((e) =>
      refreshDiagnostics(e.document, emojiDiagnostics)
    )
  );

  context.subscriptions.push(
    vscode.workspace.onDidCloseTextDocument((doc) =>
      emojiDiagnostics.delete(doc.uri)
    )
  );
}
