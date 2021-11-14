export type TestCase = Array<[string, unknown]>;

export const functionWrapper = (cases: TestCase): TestCase =>
  cases.map(([code, expected]) => [`main() { ${code}; }`, expected]);
export const parameterWrapper = (cases: TestCase): TestCase =>
  cases.map(([code, expected]) => [`main(${code}) { }`, expected]);
export const conditionWrapper = (cases: TestCase): TestCase =>
  cases.map(([code, expected]) => [
    `main() { if(true) { ${code}; } }`,
    expected,
  ]);
export const whileWrapper = (cases: TestCase): TestCase =>
  cases.map(([code, expected]) => [
    `main() { while(true) { ${code}; } }`,
    expected,
  ]);
export const forLoopWrapper = (cases: TestCase): TestCase =>
  cases.map(([code, expected]) => [
    `main() { for(;;) { ${code}; } }`,
    expected,
  ]);
