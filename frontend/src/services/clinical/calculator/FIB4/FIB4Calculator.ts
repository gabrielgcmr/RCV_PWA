import { FIB4Data } from "./FIB4Data";

// Calcula o índice FIB-4.
export default function calculateFIB4(data: FIB4Data): number {
  const { age, ast, alt, platelets } = data;
  const fib4 = (age * ast) / (platelets * Math.sqrt(alt));
  return parseFloat(fib4.toFixed(2)); // Arredonda para duas casas decimais
}
