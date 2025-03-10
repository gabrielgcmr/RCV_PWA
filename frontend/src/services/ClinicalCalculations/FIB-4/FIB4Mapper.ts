import { PatientData } from "../../../interfaces/Interfaces";
import { FIB4Data } from "./FIB4Data";

// Mapeia os dados do paciente para o cálculo do FIB-4.
export function mapFIB4Data(patientData: PatientData): FIB4Data {
  const getExamValue = (name: string): number =>
    Number(patientData.complementaryExams.exams.find(exam => exam.name === name)?.value || 0);

  return {
    age: Number(patientData.identification.age),
    ast: getExamValue("ast"),
    alt: getExamValue("alt"),
    platelets: getExamValue("platelets"),
  };
}
