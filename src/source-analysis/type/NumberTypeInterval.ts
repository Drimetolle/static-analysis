export default class NumberTypeInterval {
  private readonly minValue: number;
  private readonly maxValue: number;

  constructor(minValue: number, maxValue: number) {
    this.minValue = minValue;
    this.maxValue = maxValue;
  }

  inInterval(value: number): boolean {
    return this.minValue <= value && this.maxValue >= value;
  }
}
