import * as vscode from "vscode";

export function refreshDiagnostics(
  doc: vscode.TextDocument,
  emojiDiagnostics: vscode.DiagnosticCollection
): void {
  const diagnostics: vscode.Diagnostic[] = [];

  diagnostics.push(createDiagnostic(doc, doc.lineAt(0), 0));

  emojiDiagnostics.set(doc.uri, diagnostics);
}

function createDiagnostic(
  doc: vscode.TextDocument,
  lineOfText: vscode.TextLine,
  lineIndex: number
): vscode.Diagnostic {
  // find where in the line of thet the 'emoji' is mentioned
  const index = 0;

  // create range that represents, where in the document the word is
  const range = new vscode.Range(lineIndex, index, lineIndex, index);

  const diagnostic = new vscode.Diagnostic(
    range,
    "When you say 'emoji', do you want to find out more?",
    vscode.DiagnosticSeverity.Information
  );
  diagnostic.code = "err";

  console.log(index);

  return diagnostic;
}
