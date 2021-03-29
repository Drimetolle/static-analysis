export default class VariableAlreadyDefinedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "VariableAlreadyDefinedException";
  }
}
