import { PatientData } from "../../../interfaces/Interfaces";
import { calculateCKDEPI } from "./CKDEPICalculator";
import { mapCKDEPIData } from "./CKDEPIMapper";
import { validateCKDEPIData } from "./CKDEPIValidator";

// Calcula a TFG pela equação CKD-EPI.
export function calculateCKDEPIIndex(patientData: PatientData): { eGFR: number | undefined; errors: string[] } {
  const mappedData = mapCKDEPIData(patientData);
  const validation = validateCKDEPIData(mappedData);
  const eGFR = calculateCKDEPI(mappedData)

  if (!validation.isValid) return { eGFR: undefined, errors: validation.errors };

  return { eGFR, errors: [] };
}
