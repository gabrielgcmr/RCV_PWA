import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

export function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }

  const { patientData } = context;

  const findExam = (name: string) => {
    return patientData?.complementaryExams?.exams.find(exam => exam.name === name)?.value || "Não informado";
  };

  const getExamValue = (name: string) => {
    return patientData?.complementaryExams?.exams.find(exam => exam.name === name)?.value;
  };

  return { ...context, findExam, getExamValue };
}

