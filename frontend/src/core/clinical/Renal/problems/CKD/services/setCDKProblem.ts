// src/core/clinical/CDK/setCKDProblem.ts

import { ClinicalPatient, Problem } from "@/types";
import setCkdEpiPrevention from "./setCkdEpiPrevention";
import CKDStaging from "../staging/CKDStaging";


export function setCKDProblem(patient: ClinicalPatient): Problem | null {
  const result = setCkdEpiPrevention(patient);
  if (!result || typeof result.value !== "number") return null;

  const eGFR = result.value;
  const UACR = Number(
    patient.exams.find((exam) => exam.key === "UACR")?.value ?? undefined
  );

  const eGFRisLow = eGFR < 60;
  const UACRisElevated = !!UACR && UACR > 30;

  if (!eGFRisLow && !UACRisElevated) return null;

  const stage = CKDStaging(eGFR, UACR);

  const today = new Date().toISOString();

  const problem: Problem = {
    key: "CKD",
    name: "Doença Renal Crônica",
    code: "N18", // CID-10
    codeSystem: "CID10",
    abbreviation: "DRC",
    diagnosisStatus: "suspeita",
    dateOfOnset: today,
    description: `Suspeita de DRC (${stage}). Achado isolado. Confirmar persistência por ≥ 3 meses.`,
  };

  return problem;
}
