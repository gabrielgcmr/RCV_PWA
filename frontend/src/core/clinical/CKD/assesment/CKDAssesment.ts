// src/core/clinical/CKDAssessmentService.ts
import calculateCKDEPI from "../calculator/ckdEpi.calculator";
import CKDStaging from "../staging/CKDStaging";
import { ClinicalPatientData } from "@/types";

export function CKDAssesment(patient: ClinicalPatientData) {
  const age = Number(patient.identification.age);
  const gender = patient.identification.gender;
  const race = patient.identification.race;
  const seric_creatinine = Number(
    patient.exams.find((e) => e.key === "creatinine")?.value
  );
  const uacr = Number(
    patient.exams.find((e) => e.key === "UACR")?.value
  );

  const eGFR = calculateCKDEPI(age, gender, race, seric_creatinine);
  const hasSuspicion = eGFR < 60 || uacr > 30;
  const stage = hasSuspicion ? CKDStaging(eGFR, uacr) : null;

  return {
    hasSuspicion,
    eGFR,
    uacr,
    stage,
  };
}
