import { PatientData } from "../../../interfaces/Interfaces";
import { calculateCVR } from "./CVRCalculator";
import { mapPatientData } from "./CVRMapper";
import { validateCVRData } from "./CVRValidator";

/**
 * Função principal para calcular o risco cardiovascular.
 */
export function calculateCVRIndex(patientData: PatientData) {
  // 1. Mapeia os dados do paciente para o formato correto
  console.log (patientData)
  const mappedData = mapPatientData(patientData,);
  console.log(mappedData)
  
  // 2. Valida os dados do paciente
  const validation = validateCVRData(mappedData);
  if (!validation.isValid) {
    return { realRisk: null, realRiskCategory: "", idealRisk: null, errors: validation.errors };
  }

  // 3. Calcula os riscos
  const { realRiskResult, idealRiskResult } = calculateCVR(mappedData);

  // 4. Retorna os resultados
  return {
    realRisk: realRiskResult.risk,
    realRiskCategory: realRiskResult.category,
    idealRisk: idealRiskResult,
    errors: [],
  };
}
