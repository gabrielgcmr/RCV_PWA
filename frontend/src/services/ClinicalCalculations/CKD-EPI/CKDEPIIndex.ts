import { PatientData } from "../../../interfaces/Interfaces";
import { calculateCKDEPI } from "./CKDEPICalculator";
import { mapCKDEPIData } from "./CKDEPIMapper";
import { validateCKDEPIData } from "./CKDEPIValidator";

// Calcula a TFG pela equação CKD-EPI.
export function calculateCKDEPIIndex(patientData: PatientData): { tfg: number | undefined; errors: string[] } {
  const mappedData = mapCKDEPIData(patientData);
  const validation = validateCKDEPIData(mappedData);

  if (!validation.isValid) return { tfg: undefined, errors: validation.errors };

  return { tfg: calculateCKDEPI(mappedData), errors: [] };
}
