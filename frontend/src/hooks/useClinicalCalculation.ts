import { useState } from "react";
import { usePatient } from "./usePatient";
import { getExamValueAsNumber } from "../utils/examUtils";
import { CKDEPIIndex } from "../services/ClinicalCalculations/CKD-EPI/CKDEPIIndex";
import { FIB4Index } from "../services/ClinicalCalculations/FIB-4/FIB4Index";
import { CVRIndex } from "../services/ClinicalCalculations/CVR/CVRIndex";

export function useClinicalCalculations() {
  const { patientData, getExamValue } = usePatient();
  const getExamValueNumber = (name: string) => getExamValueAsNumber(getExamValue, name);

  const [data, setData] = useState<{
    results: { TFG?: string; RCV?: string; FIB4?: string };
    errors: { TFG?: string[]; RCV?: string[]; FIB4?: string[] };
  }>({
    results: {},
    errors: {},
  });

  const runCalculation = (name: "TFG" | "RCV" | "FIB4", 
    calculateFn: Function) => {
      const { [name]: result, errors } = calculateFn(patientData, getExamValueNumber);
    setData((prev) => ({
      results: { ...prev.results, [name]: result !== null ? `${result}` : "Não avaliado" },
      errors: { ...prev.errors, [name]: errors },
    }));
  };

  return {
    results: data.results,
    errors: data.errors,
    calculateTFG: () => runCalculation("TFG", CKDEPIIndex.calculateTFG),
    calculateRCV: () => runCalculation("RCV", CVRIndex.calculateRCV),
    calculateFIB4: () => runCalculation("FIB4", FIB4Index.calculateFIB4),
  };
}
