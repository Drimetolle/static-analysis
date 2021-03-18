import { Walker } from "./Walker";

export default class WalkersManager {
  private readonly walkers: Array<Walker>;

  constructor() {
    this.walkers = [];
  }
}
