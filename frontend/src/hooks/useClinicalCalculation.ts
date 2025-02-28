import { useState } from "react";
import { usePatient } from "./usePatient";
import { getExamValueAsNumber } from "../utils/examUtils";
import { CKDEPIIndex } from "../services/CKD-EPI/CKDEPIIndex";
import { CardiovascularRiskIndex } from "../services/CardiovascularRisckCalculatorService/CardiovascularRiskIndex";

export function useClinicalCalculations() {
  const { patientData, getExamValue } = usePatient();
  const getExamValueNumber = (name: string) => getExamValueAsNumber(getExamValue, name);

  const [tfg, setTfg] = useState<string>("");
  const [cvRisk, setCvRisk] = useState<string>("");
  const [errors, setErrors] = useState<{ tfg?: string[]; cvRisk?: string[] }>({});

  const calculateTFG = () => {
    const { tfg, errors } = CKDEPIIndex.calculateTFG(patientData, getExamValueNumber);
    setTfg(tfg !== null ? `${tfg} mL/min/1.73m²` : "Não avaliado");
    setErrors((prev) => ({ ...prev, tfg: errors }));
  };

  const calculateRisk = () => {
    const { realRisk, realRiskCategory, idealRisk } =
      CardiovascularRiskIndex.processRiskCalculation(patientData, getExamValueNumber);

    setCvRisk(realRisk
      ? `RCV: ${realRisk.toFixed(2)}% (${realRiskCategory}) | Ideal: ${idealRisk.toFixed(2)}%`
      : "Não avaliado"
    );
  };

  return { tfg, cvRisk, errors, calculateTFG, calculateRisk };
}
