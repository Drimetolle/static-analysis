export const stylePropertyInSchema = {
  style: {
    type: "string",
    pattern:
      "^(CamelCase|UpperCamelCase|UpperSnakeCase|SnakeCase|PascalCase|UpperPascalCase)$",
  },
};

export enum CodeStyles {
  CamelCase,
  UpperCamelCase,
  SnakeCase,
  UpperSnakeCase,
  PascalCase,
  UpperPascalCase,
}

export type CodeStylesStrings = keyof typeof CodeStyles;

export default class CodeStyleStrategy {
  public static getCodeStyleChecker(
    style: CodeStylesStrings
  ): (id: string) => boolean {
    switch (style) {
      case "CamelCase":
        return CodeStyleStrategy.isCamelCase;
      case "UpperSnakeCase":
        return CodeStyleStrategy.isUpperSnakeCase;
      case "PascalCase":
        return CodeStyleStrategy.isPascalCase;
      case "UpperCamelCase":
      case "SnakeCase":
      case "UpperPascalCase":
        throw new Error(`Not implemented code style: ${style}`);
    }
  }

  private static isPascalCase(str: string): boolean {
    return /^([A-Z][a-z0-9]+)*[A-Z][a-z0-9]*$/.test(str);
  }

  private static isCamelCase(str: string) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(str);
  }

  private static isUpperSnakeCase(str: string): boolean {
    return /^[A-Z]+(?:_[A-Z]+)*$/.test(str);
  }
}
