import type { ClinicalPatientData, Prevention } from "@/types";
import { setEgfrPrevention } from "../Renal/preventions/setEgfrPrevention";

// import { screeningPrevention }        from "./screeningPrevention";
// … importe aqui todos os módulos de prevenção

export function generatePreventions(
  patient: ClinicalPatientData
): Prevention[] {
  // monte um array de funções geradoras
  const builders: ((p: ClinicalPatientData) => Prevention)[] = [
    setEgfrPrevention
    // screeningPrevention,
    // …
  ];

  // chame todas e retorne o array resultante
  return builders.map((fn) => fn(patient));
}

export default generatePreventions;
