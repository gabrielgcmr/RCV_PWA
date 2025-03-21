import { PatientData, ProblemData } from "../../../interfaces/Interfaces";
import calculateCKDEPIIndex from "../../clinicalCalculations/CKD-EPI/CKDEPIIndex";
import CKDStaging from "./CKDStaging";

export default function analyzeCKD(patientData: PatientData): ProblemData {
  const { eGFR } = calculateCKDEPIIndex(patientData);
  const UACR = Number(patientData.complementaryExams.exams.find(exam => exam.name === "UACR")?.value ?? undefined);
  const examDate = patientData.complementaryExams.date;

  if (eGFR !== undefined) {
    const stage = CKDStaging(eGFR, UACR);
    return {
      name: "CKD",
      present: true,
      
      details: {
        analyzedAt: examDate ? new Date(examDate).toISOString() : new Date().toISOString(),
        stage,
        eGFR,
        UACR,
      },
    };
  }

  return {
    name: "CKD",
    present: true,
    details: {
      analyzedAt: examDate ? new Date(examDate).toISOString() : new Date().toISOString(),
      stage: "Indeterminado",
      eGFR,
      UACR,
    },
  };
}

