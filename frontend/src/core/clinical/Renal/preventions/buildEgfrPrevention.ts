import { ClinicalPatientData, Prevention } from "@/types";
import classifyeGFR from "../eGFR/classifier";
import calculateCkdEpi from "../../calculator/ckdEpi";

export function buildEgfrPrevention(patient: ClinicalPatientData): Prevention {
  const age = Number(patient.identification.age)
  const gender= patient.identification.gender
  const race= patient.identification.race
  const creat = Number(patient.exams.find((e) => e.key === "creatinine")?.value || 0);

  const { eGFR, errors } = calculateCkdEpi(age,gender,race,creat);   
  const classification = classifyeGFR(eGFR!);

  if (errors) {
    return {
      
      name:         "Taxa de Filtração Glomerular Estimada",
      abbreviation: "eGFR",
      errors,
      updatedAt:    new Date().toISOString(),
    };
  }

  const abbreviation = "TFG"; // Defina abbreviation aqui
  const unit = "mL/min/1.73m²"; // Defina unit aqui
  const value = parseFloat(eGFR!.toFixed(2)); // Defina value aqui

    return {
      name: "Taxa de Filtração Glomerular Estimada",
      abbreviation: abbreviation,
      value: value,
      unit: unit,
      classification,
      description: ` ${value} ${unit}- ${classification}`,
      updatedAt: new Date().toISOString(),
    };
  }