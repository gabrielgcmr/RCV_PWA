// services/preventionService.ts
import { ClinicalPatientData } from "@/types";
import { buildEgfrPrevention } from "../Renal/preventions/buildEgfrPrevention";

// Importe outros builders de prevenção no futuro

export function setPatientPreventions(patient: ClinicalPatientData) {
  // Limpa prevenções existentes (se necessário)
  patient.preventions = patient.preventions || [];
  
  // Adiciona todas as prevenções
  setEgfrPrevention(patient);
  // Adicione outras funções de prevenção aqui no futuro
  // setOtherPrevention(patient);
}

function setEgfrPrevention(patient: ClinicalPatientData) {
  const egfrPrevention = buildEgfrPrevention(patient);
  patient.preventions.push(egfrPrevention);
}