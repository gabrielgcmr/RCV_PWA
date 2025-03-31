import { PatientData } from "../../../interfaces/Patient";
import calculateCKDEPI  from "./CKDEPICalculator";
import { mapCKDEPIData } from "./CKDEPIMapper";
import { validateCKDEPIData } from "./CKDEPIValidator";

// Calcula a TFG pela equação CKD-EPI
function calculateCKDEPIIndex(patientData: PatientData): { eGFR: number | undefined; errors: string[] } {
  const mappedData = mapCKDEPIData(patientData);
  const validation = validateCKDEPIData(mappedData);
  const eGFR = calculateCKDEPI(mappedData)

  if (!validation.isValid) return { eGFR: undefined, errors: validation.errors };

  return { eGFR, errors: [] };
}

export default calculateCKDEPIIndex