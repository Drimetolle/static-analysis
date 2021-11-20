import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { Interval } from "antlr4ts/misc";

export function isCppFile(filename: string): boolean {
  return filename.indexOf(".cpp") != -1;
}

export function getOriginalTextFromAst(ctx?: ParserRuleContext): string {
  if (!ctx) {
    return "";
  }

  return (
    ctx.start.inputStream?.getText(
      new Interval(ctx.start.startIndex, ctx.stop!.stopIndex)
    ) ?? ctx.text
  );
}
