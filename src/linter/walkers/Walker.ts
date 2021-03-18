export interface Walker {
  start(): void;
  onEnd(callback: (...args: unknown[]) => void): void;
}
