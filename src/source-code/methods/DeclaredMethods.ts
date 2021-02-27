import MethodsScope from "./MethodsScope";
import HeaderScope from "./HeaderScope";
import ClassScope from "./ClassScope";
import MethodSignature from "./MethodSignature";

/*
 * Not working with cpp classes. Work in progress.
 * */
export default class DeclaredMethods {
  private readonly methods: Array<MethodsScope>;

  constructor(scopes: Array<MethodsScope>) {
    this.methods = scopes;
  }

  addMethodInScope(id: string, signature: MethodSignature): void {
    const scope = this.findById(id);
    if (!scope) {
      throw new Error("Scope not find");
    }

    if (scope instanceof HeaderScope) {
      scope?.methods.push(signature);
    } else if (scope instanceof ClassScope) {
      //TODO
    }
  }

  getMethodSignature(
    id: string,
    methodName: string
  ): MethodSignature | undefined {
    return this.findById(id)?.methods.find((m) => m.name === methodName);
  }

  private findById(id: string): MethodsScope | undefined {
    return this.methods.find((s) => s.name === id);
  }
}
