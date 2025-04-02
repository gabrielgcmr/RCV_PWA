
import { Patient, Prevention } from "../../../../interfaces";
import calculateCKDEPI  from "./CKDEPICalculator";
import classifyTFG from "./CKDEPIClassifier";
import  mapCKDEPIData  from "./CKDEPIMapper";
import  validateCKDEPIData  from "./CKDEPIValidator";

// Calcula a TFG pela equação CKD-EPI
function CKDEPIIndex(patient: Patient): Prevention {
  const mappedData = mapCKDEPIData(patient);
  const validation = validateCKDEPIData(mappedData);
  if (!validation.isValid) {
    return {
      name: "TFG",
      abreviation: "TFG",
      classification: "Não Avaliado",
      errors: validation.errors,
    };
  }

  const eGFR = calculateCKDEPI(mappedData);

  return {
    name: "TFG",
    abreviation: "TFG",
    value: eGFR,
    unit: "mL/min/1.73m²",
    classification: classifyTFG(eGFR), // se desejar classificar, veja abaixo
    description: `TFG estimada: ${eGFR} mL/min/1.73m²`,
    errors: [],
  };
}


export default CKDEPIIndex