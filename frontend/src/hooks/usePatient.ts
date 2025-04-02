import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { examDictionary } from "../constants/examDictionary";

function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }

  const { patient, updatePatient } = context;
  // ====== FUNÇÕES DE EXAMES ======
  const findExam = (name: string) => {
    return patient?.complementaryExams?.exams.find((exam) => exam.name === name)
      ?.value;
  };

  const getExamValue = (name: string) => {
    if (!patient?.complementaryExams?.exams) return undefined;
    return patient.complementaryExams.exams.find((exam) => exam.name === name)
      ?.value;
  };

  const updateExam = (
    name: string,
    value: string | number,
    abbreviation: string
  ) => {
    const updatedExams = patient.complementaryExams.exams.map(
      (exam) => (exam.name === name ? { ...exam, value, abbreviation } : exam) // 🔹 Atualiza a abreviação também
    );

    updatePatient("complementaryExams", {
      date: patient.complementaryExams.date,
      exams: updatedExams,
    });
  };

  const addExam = (
    name: string,
    value: string | number,
    abbreviation: string = ""
  ) => {
    const updatedExams = [
      ...patient.complementaryExams.exams,
      { name, value, abbreviation },
    ];

    updatePatient("complementaryExams", {
      date: patient.complementaryExams.date,
      exams: updatedExams,
    });
  };

  const handleExamChange = (
    name: string,
    value: string | number,
    abbreviation?: string
  ) => {
    if (
      !patient ||
      !patient.complementaryExams ||
      !patient.complementaryExams.exams
    ) {
      console.warn(
        " Tentativa de acessar `patientData` antes de estar pronto."
      );
      return;
    }
    const examExists = patient.complementaryExams.exams.some(
      (exam) => exam.name === name
    );
    console.log(" ExamDictionary carregado:", examDictionary);
    const examAbbreviation =
      abbreviation || examDictionary[name]?.abbreviation || "";

    if (examExists) {
      updateExam(name, value, examAbbreviation); // 🔹 Atualizamos incluindo a abreviação
    } else {
      addExam(name, value, examAbbreviation); // 🔹 Adicionamos garantindo a abreviação
    }
  };

  // ====== FUNÇÕES DE PROBLEMAS ======
  const hasProblem = (problemName: string) => {
    return (
      patient.problemList?.problems?.some((p) => p.name === problemName) ||
      false
    );
  };

  return { ...context, findExam, getExamValue, handleExamChange, hasProblem };
}

export default usePatient;
