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

export default class CodeStyleStrategy {
  public static getCodeStyleChecker(
    style: CodeStyles
  ): (id: string) => boolean {
    switch (style) {
      case CodeStyles.CamelCase:
        return CodeStyleStrategy.isCamelCase;
      case CodeStyles.UpperSnakeCase:
        return CodeStyleStrategy.isUpperSnakeCase;
      case CodeStyles.PascalCase:
        return CodeStyleStrategy.isPascalCase;
      case CodeStyles.SnakeCase:
      case CodeStyles.UpperCamelCase:
      case CodeStyles.UpperPascalCase:
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
