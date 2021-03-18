import MethodSignature from "./MethodSignature";

export default abstract class MethodsScope {
  readonly name: string;
  readonly methods: Array<MethodSignature>;

  protected constructor(name: string);
  protected constructor(name: string, methods: Array<MethodSignature>);
  protected constructor(name: string, methods?: Array<MethodSignature>) {
    this.name = name;
    this.methods = methods ?? new Array<MethodSignature>();
  }
}
