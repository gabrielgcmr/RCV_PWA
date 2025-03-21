import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }

  const { patientData } = context;
   // ====== FUNÇÕES DE EXAMES ======

  const getExamValue = (name: string) => {
    if (!patientData?.complementaryExams?.exams) return undefined;
    return patientData.complementaryExams.exams.find(exam => exam.name === name)?.value;
  };

    
  // ====== FUNÇÕES DE PROBLEMAS ======
  const hasProblem = (problemName: string) => {
  return patientData.problemList?.problems?.some((p) => p.name === problemName) || false;
  };

  return { ...context, getExamValue,hasProblem };
}

export default usePatient