export class NumberHelper {
  private constructor() {}

  public static addLeadingZeros(number: number, charsToFill = 2): string {
    return number.toString().padStart(charsToFill, "0");
  }

  public static formatPercentage(number: number): string {
    return `${number?.toFixed(2)}%`;
  }
}
