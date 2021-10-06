import { singleton } from "tsyringe";

@singleton()
export default class AppConfig {
  get includePath(): string {
    return "C:\\cygwin64\\usr\\include";
  }
}
