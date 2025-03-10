import { PatientData } from "../../../interfaces/Interfaces";
import { calculateCVR } from "./CVRCalculator";
import { mapPatientData } from "./CVRMapper";
import { validateCVRData } from "./CVRValidator";

/**
 * Função principal para calcular o risco cardiovascular.
 */
export function calculateCVRIndex(patientData: PatientData) {
  // 1. Mapeia os dados do paciente para o formato correto
  const mappedData = mapPatientData(patientData,);
  
  // 2. Valida os dados do paciente
  const validation = validateCVRData(mappedData);
  if (!validation.isValid) {
    return { realRisk: 0, realRiskCategory: "Desconhecido", idealRisk: 0, errors: validation.errors };
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
