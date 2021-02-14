import "reflect-metadata";
import { window, commands, ExtensionContext } from "vscode";
import a from "./Analyzer";

export function activate(context: ExtensionContext): void {
  const disposable = commands.registerCommand("extension.helloWorld", () => {
    window.showInformationMessage(a);
  });

  context.subscriptions.push(disposable);
}
