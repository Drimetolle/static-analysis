import { autoInjectable } from "tsyringe";
import { CPP14ParserListener } from "../grammar/CPP14ParserListener";

@autoInjectable()
export default class Listener implements CPP14ParserListener {}
