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
  UpperSnakeCase,
  SnakeCase,
  PascalCase,
  UpperPascalCase,
}

export default class CodeNameStyles {
  private static isPascalCase(str: string): boolean {
    return /^([A-Z][a-z0-9]+)*[A-Z][a-z0-9]*$/.test(str);
  }
}
