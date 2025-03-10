import { mapFIB4Data } from "./FIB4Mapper";
import { validateFIB4Data } from "./FIB4Validator";
import { calculateFIB4 } from "./FIB4Calculator";
import { PatientData } from "../../../interfaces/Interfaces";

// Calcula o índice FIB-4.
export function calculateFIB4Index(patientData: PatientData): { fib4: number | null; errors: string[] } {
  const mappedData = mapFIB4Data(patientData);
  const validation = validateFIB4Data(mappedData);

  if (!validation.isValid) return { fib4: null, errors: validation.errors };

  return { fib4: calculateFIB4(mappedData), errors: [] };
}
