import { IFIB4Data } from "./IFIB4Data"

export class FIB4Calculator {
  static calculate(data: IFIB4Data): number {
    const { age, ast, alt, platelets } = data;
    const fib4 = (age * ast) / (platelets * Math.sqrt(alt));
    return parseFloat(fib4.toFixed(2)); // Arredonda para duas casas decimais
  }
}
