import { mapFIB4Data } from "./FIB4Mapper";
import { validateFIB4Data } from "./FIB4Validator";
import { calculateFIB4 } from "./FIB4Calculator";
import { PatientData } from "../../../interfaces/Interfaces";
import { classifyFIB4 } from "./FIB4Classifier";

// Calcula o índice FIB-4.
export function calculateFIB4Index(patientData: PatientData): { fib4: number | undefined; FIB4category: string; errors: string[] } {
  const mappedData = mapFIB4Data(patientData);
  const validation = validateFIB4Data(mappedData);

  if (!validation.isValid) return { fib4: undefined, FIB4category:"Não avaliado", errors: validation.errors };

  const fib4 = calculateFIB4(mappedData)
  const FIB4category = classifyFIB4(fib4, mappedData.age)
  return { fib4, FIB4category, errors: [] };
}
