// services/ckdEpiService.ts

import { ClinicalPatientData } from "@/types";
import mapCKDEPIData from "./mapper";
import calculateCKDEPI from "./calculator";
import validateCKDEPIData from "./validator";

interface EGFRResult {
  eGFR?: number;
  errors?: string[];
}

export function computeEGFRFromPatient(
    patient: ClinicalPatientData
  ): EGFRResult {
    const data = mapCKDEPIData(patient);
    const { isValid, errors } = validateCKDEPIData(data);
    if (!isValid) return { errors };
    return { eGFR: calculateCKDEPI(data) };
  }
