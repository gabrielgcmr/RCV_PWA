import { PatientData } from "../../../interfaces/Interfaces";
import { calculateCVR } from "./CVRCalculator";
import { classifyCVR } from "./CVRClassifier";
import { mapPatientData } from "./CVRMapper";
import { validateCVRData } from "./CVRValidator";

/**
 * Função principal para calcular o risco cardiovascular.
 */
export function calculateCVRIndex(patientData: PatientData) {
  // 1. Mapeia os dados do paciente para o formato correto
  const mappedData = mapPatientData(patientData);
  
  // 2. Valida os dados do paciente
  const validation = validateCVRData(mappedData);
  if (!validation.isValid) {
    return { realRisk: undefined, realRiskCategory: "Não Avaliado", idealRisk: undefined, errors: validation.errors };
  }

  // 3. Calcula os riscos
  const { CVRRealRisk,CVRIdealRisk } = calculateCVR(mappedData);
  const CVRcategory = classifyCVR(CVRRealRisk)

  // 4. Retorna os resultados
  return {
    CVRRealRisk,
    CVRIdealRisk,
    CVRcategory,
    errors: [],
  };
}
