/**
 * Classifica o risco de fibrose hepática baseado no valor do FIB-4 e na idade do paciente.
 * Baseado em diretrizes mais recentes de avaliação de fibrose hepática (EASL 2024, AASLD 2023).
 */
export default function classifyFIB4(fib4: number, age: number): string {
  if (age < 65) {
    if (fib4 < 1.3) return "Baixo risco (F0-F2)";
    if (fib4 < 2.67) return "Zona intermediária (F2-F3?)";
    return "Alto risco (F3-F4)";
  } else {
    if (fib4 < 2.0) return "Baixo risco (F0-F2)";
    if (fib4 < 3.25) return "Zona intermediária (F2-F3?)";
    return "Alto risco (F3-F4)";
  }
}
