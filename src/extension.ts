import * as vscode from "vscode";
import a from "./Analyzer";

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand(
    "extension.helloWorld",
    () => {
      vscode.window.showInformationMessage(a);
    }
  );

  context.subscriptions.push(disposable);
}
