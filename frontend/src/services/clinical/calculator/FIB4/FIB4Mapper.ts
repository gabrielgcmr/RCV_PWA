
import { ClinicalPatientData } from "../../../../types";
import { FIB4Data } from "./FIB4Data";

// Mapeia os dados do paciente para o cálculo do FIB-4.
export default function mapFIB4Data(patient: ClinicalPatientData): FIB4Data {
  const getExamValue = (name: string): number =>
    Number(patient.exams.find(exam => exam.name === name)?.value || 0);

  return {
    age: Number(patient.identification.age),
    ast: getExamValue("ast"),
    alt: getExamValue("alt"),
    platelets: getExamValue("platelets"),
  };
}
