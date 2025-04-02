
import { Patient } from "../../../../interfaces/Patient";
import FIB4Index from "../../calculator/FIB4/FIB4Index";

export function getNAFLDText(patientData: Patient, hasNAFLD: boolean): string | null {
  if (!hasNAFLD) return null;

  const { fib4, fib4category } = FIB4Index(patientData);
  return fib4
    ? `🍔 DHGNA FIB4: ${fib4} pontos - ${fib4category}`
    : `🍔 DHGNA FIB4: Não avaliado!`;
}
