import "reflect-metadata";
import { window, commands, ExtensionContext, languages } from "vscode";
import a from "./extension/Analyzer";
import { refreshDiagnostics } from "./extension/diagnostics";

export function activate(context: ExtensionContext): void {
  const disposable = commands.registerCommand("extension.helloWorld", () => {
    const emojiDiagnostics = languages.createDiagnosticCollection("emoji");
    if (window.activeTextEditor) {
      refreshDiagnostics(window.activeTextEditor.document, emojiDiagnostics);
    }
  });

  context.subscriptions.push(disposable);
}
