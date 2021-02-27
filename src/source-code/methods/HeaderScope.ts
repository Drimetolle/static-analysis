import MethodsScope from "./MethodsScope";
import MethodSignature from "./MethodSignature";

export default class HeaderScope extends MethodsScope {
  constructor(name: string);
  constructor(name: string, methods: Array<MethodSignature>);
  constructor(name: string, methods?: Array<MethodSignature>) {
    super(name, methods ?? []);
  }
}
