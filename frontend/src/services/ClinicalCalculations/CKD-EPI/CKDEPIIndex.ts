import { PatientData } from "../../../interfaces/Interfaces";
import { calculateCKDEPI } from "./CKDEPICalculator";
import { mapCKDEPIData } from "./CKDEPIMapper";
import { validateCKDEPIData } from "./CKDEPIValidator";

// Calcula a TFG pela equação CKD-EPI.
export function calculateTFG(patientData: PatientData): { tfg: number | null; errors: string[] } {
  const mappedData = mapCKDEPIData(patientData);
  const validation = validateCKDEPIData(mappedData);

  if (!validation.isValid) return { tfg: null, errors: validation.errors };

  return { tfg: calculateCKDEPI(mappedData), errors: [] };
}
