import { Prevention } from "../../../../interfaces";
import { Patient } from "../../../../interfaces/Patient";
import calculateCVR from "./CVRCalculator";
import classifyCVR from "./CVRClassifier";
import mapPatientData from "./CVRMapper";
import validateCVRData from "./CVRValidator";

/**
 * Função principal para calcular o risco cardiovascular.
 */
function CVRIndex(patientData: Patient): Prevention {
  const mappedData = mapPatientData(patientData);
  const validation = validateCVRData(mappedData);

  if (!validation.isValid) {
    return {
      name: "Risco Cardiovascular",
      abbreviation: "RCV",
      classification: "Não Avaliado",
      errors: validation.errors,
    };
  }

  // 3. Calcula os riscos
  const { CVRRealRisk, CVRIdealRisk } = calculateCVR(mappedData);
  const classification = classifyCVR(CVRRealRisk);

  return {
    name: "RCV",
    abbreviation: "RCV",
    value: CVRRealRisk,
    referenceValue: CVRIdealRisk,
    unit: "%",
    classification: classification,
    description: `Risco atual: ${CVRRealRisk.toFixed(2)}% (${classification}) — Risco Ideal: ${CVRIdealRisk.toFixed(2)}%`,
    errors: [],
  };
}

export default CVRIndex;
