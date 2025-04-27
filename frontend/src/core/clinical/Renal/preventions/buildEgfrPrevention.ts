import { ClinicalPatientData, Prevention } from "@/types";
import classifyeGFR from "../eGFR/classifier";
import calculateCkdEpi from "../../calculator/ckdEpi";

export function buildEgfrPrevention(
  patient: ClinicalPatientData
): Prevention {
  const abbreviation = "eGFR";

  // 1) Encontrar o exame de creatinina e extrair a data
  const creatExam = patient.exams.find(e => e.key === "creatinine");
  const examDate = creatExam?.date 
    ? new Date(creatExam.date).toISOString()
    : new Date().toISOString();

  // 2) Calcular o índice de ocorrência desta prevenção
  const samePrevCount = patient.preventions
    .filter(p => p.abbreviation === abbreviation)
    .length;
  const occurrenceIndex = samePrevCount + 1;
  
  // 3) Montar o ID: "eGFR-1", "eGFR-2" etc.
  const id = `${abbreviation}-${occurrenceIndex}`;

  // 4) Extrair dados clínicos e calcular eGFR
  const age    = Number(patient.identification.age);
  const gender = patient.identification.gender;
  const race   = patient.identification.race;
  const creat  = Number(creatExam?.value || 0);

  const { eGFR, errors } = calculateCkdEpi(age, gender, race, creat);
  const unit           = "mL/min/1.73m²";

  // 5) Se houve erro, retorna só com errors
  if (errors) {
    return {
      id,
      name:         "Taxa de Filtração Glomerular Estimada",
      abbreviation,
      errors,
      date:       examDate,

    };
  }

  // 6) Se deu certo, formata valor e classifica
  const value = parseFloat(eGFR!.toFixed(2));
  const classification = classifyeGFR(eGFR!);
  const description    = `${value} ${unit} — ${classification}`;

  return {
    id,
    name:           "Taxa de Filtração Glomerular Estimada",
    abbreviation,
    value,
    unit,
    classification,
    description,
    date:       examDate,
  };
}
