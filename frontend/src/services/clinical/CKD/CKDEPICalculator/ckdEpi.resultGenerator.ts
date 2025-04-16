import { ClinicalPatientData, Prevention } from "@/types";
import calculateCKDEPI from "./ckdEpi.calculator";
import classifyTFG from "./ckdEpi.classify";
import mapCKDEPIData from "./cdkEpi.mapper";
import validateCKDEPIData from "./ckdEpi.validator";
import { error } from "console";

// Calcula a TFG pela equação CKD-EPI
function generateCKDEPIResult(patient: ClinicalPatientData): Prevention | null{
  const mappedData = mapCKDEPIData(patient);
  const validation = validateCKDEPIData(mappedData);
  if (!validation.isValid) {
    return null
  }

  const eGFR = calculateCKDEPI(mappedData);
  console.log(error)
  return {
    name: "TFG",
    abbreviation: "TFG",
    value: eGFR,
    unit: "mL/min/1.73m²",
    classification: classifyTFG(eGFR), // se desejar classificar, veja abaixo
    description: `Taxa de filtração glomerular estimada`,
    updatedAt: new Date().toISOString(),
    errors: [],
  };
  
}

export default generateCKDEPIResult;
