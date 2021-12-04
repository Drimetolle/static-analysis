import { subscribeToDocumentChanges } from "./extension/diagnostics";
import { ExtensionContext, languages } from "vscode";

export function activate(context: ExtensionContext) {
  const diagnosticCollection = languages.createDiagnosticCollection(
    "static-analysis"
  );
  context.subscriptions.push(diagnosticCollection);

  subscribeToDocumentChanges(context, diagnosticCollection);
}
