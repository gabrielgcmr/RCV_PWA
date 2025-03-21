import { PatientData } from "../../../interfaces/Interfaces";
import calculateCKDEPIIndex from "../../ClinicalCalculations/CKD-EPI/CKDEPIIndex";


export function analyzeCKD(patientData: PatientData) {
  const { eGFR } = calculateCKDEPIIndex(patientData);
  const UACR = Number(patientData.complementaryExams.exams.find(e => e.name === "UACR")?.value ?? undefined);

  if (eGFR !== undefined) {
    const stage = CKDStaging(eGFR, UACR);
    return {
      present: true,
      details: { stage, eGFR, UACR }
    };
  }

  return {
    present: true,
    details: { stage: "Indeterminado", eGFR: undefined, UACR }
  };
}
