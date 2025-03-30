import { mapFIB4Data } from "./FIB4Mapper";
import { validateFIB4Data } from "./FIB4Validator";
import { calculateFIB4 } from "./FIB4Calculator";
import { PatientData } from "../../../interfaces/Patient";
import { classifyFIB4 } from "./FIB4Classifier";

// Calcula o índice FIB-4.
function calculateFIB4Index(patientData: PatientData): { fib4: number | undefined; fib4category: string; errors: string[] } {
  const mappedData = mapFIB4Data(patientData);
  const validation = validateFIB4Data(mappedData);

  if (!validation.isValid) return { fib4: undefined, fib4category:"Não avaliado", errors: validation.errors };

  const fib4 = calculateFIB4(mappedData)
  const fib4category = classifyFIB4(fib4, mappedData.age)
  return { fib4, fib4category, errors: [] };
}

export default calculateFIB4Index