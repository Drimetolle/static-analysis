import { subscribeToDocumentChanges } from "./extension/diagnostics";
import { ExtensionContext, languages } from "vscode";

export function activate(context: ExtensionContext) {
  const emojiDiagnostics = languages.createDiagnosticCollection(
    "static-analysis"
  );
  context.subscriptions.push(emojiDiagnostics);

  subscribeToDocumentChanges(context, emojiDiagnostics);
}
