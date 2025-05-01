// src/core/clinical/CDK/CKDAssessment.ts
import CKDStaging from "../staging/CKDStaging";
import { ClinicalPatient } from "@/types";

export function CKDAssessment(patient: ClinicalPatient) {

  const uacr = Number(
    patient.exams.find((e) => e.key === "UACR")?.value
  );


  const eGFR = 40
  
  const hasSuspicion = eGFR < 60 || uacr >= 30;

  const stage = hasSuspicion ? CKDStaging(eGFR, uacr) : null;

  return {
    hasSuspicion,
    eGFR,
    uacr,
    stage,
  };
}
