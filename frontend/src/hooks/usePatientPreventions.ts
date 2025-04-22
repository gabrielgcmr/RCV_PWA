// hooks/usePatientPreventions.ts

import { setPatientPreventions } from "@/core/clinical/preventions/setPatientPreventions";
import { ClinicalPatientData } from "@/types";
import { useEffect } from "react";

export function usePatientPreventions(patient: ClinicalPatientData) {
  useEffect(() => {
    setPatientPreventions(patient);
  }, [patient]);
}
