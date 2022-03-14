export default class EmptyNodesInReport extends Error {
  constructor() {
    super("Node can't be empty");
    this.name = EmptyNodesInReport.constructor.name;
  }
}
