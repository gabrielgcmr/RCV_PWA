import { ClinicalPatient, Prevention } from "@/types";
import calculateCKDEPI from "../calculator/ckdEpi.calculator";
import classifyTFG from "../calculator/ckdEpi.classify";
import mapCKDEPIData from "../calculator/cdkEpi.mapper";
import validateCKDEPIData from "../calculator/ckdEpi.validator";
import { error } from "console";

// Calcula a TFG pela equação CKD-EPI
function setCkdEpiPrevention(patient: ClinicalPatient): Prevention | null{
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

export default setCkdEpiPrevention;
