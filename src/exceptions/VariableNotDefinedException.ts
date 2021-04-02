export default class VariableNotDefinedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "VariableNotDefinedException";
  }
}
