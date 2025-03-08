import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

export function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }

  const { patientData, updatePatientData, updateExam,toggleProblem } = context;

  return { patientData, updatePatientData, updateExam, toggleProblem };
}