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
  const index = 0;

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
