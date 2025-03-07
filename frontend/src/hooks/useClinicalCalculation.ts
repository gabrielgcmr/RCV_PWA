import { useState } from "react";
import { usePatient } from "./usePatient";
import { CKDEPIIndex } from "../services/ClinicalCalculations/CKD-EPI/CKDEPIIndex";
import { FIB4Index } from "../services/ClinicalCalculations/FIB-4/FIB4Index";
import { CVRIndex } from "../services/ClinicalCalculations/CVR/CVRIndex";

type CalculationResult = number | string;
type CalculationErrors = { message: string; code?: string }[];

type ClinicalCalculationsData = {
  results: { TFG?: CalculationResult; RCV?: CalculationResult; FIB4?: CalculationResult };
  errors: { TFG?: CalculationErrors; RCV?: CalculationErrors; FIB4?: CalculationErrors };
};

export function useClinicalCalculations() {
  const { patientData, getExamValue } = usePatient();

  const [data, setData] = useState<ClinicalCalculationsData>({
  results: {},
  errors: {},
});
  const runCalculation = (name: "TFG" | "RCV" | "FIB4", 
    calculateFn: Function) => {
      const { [name]: result, errors } = calculateFn(patientData, getExamValue);
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
