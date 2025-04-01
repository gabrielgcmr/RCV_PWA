
import { PatientData } from "../../../../interfaces/Patient";
import calculateFIB4Index from "../../calculator/FIB-4/FIB4Index";

export function getNAFLDText(patientData: PatientData, hasNAFLD: boolean): string | null {
  if (!hasNAFLD) return null;

  const { fib4, fib4category } = calculateFIB4Index(patientData);
  return fib4
    ? `🍔 DHGNA FIB4: ${fib4} pontos - ${fib4category}`
    : `🍔 DHGNA FIB4: Não avaliado!`;
}
