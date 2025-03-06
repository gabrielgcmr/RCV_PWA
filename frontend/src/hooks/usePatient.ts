import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { PatientData } from "../interfaces/PatientData";
import { ExamData } from "../interfaces/ExamData";

export function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }

  const { patientData, updatePatientData } = context;

  // ======================================================
  // Funções Genéricas para Atualizar Qualquer Seção do Paciente
  // ======================================================
  const handleFieldChange = (
    section: keyof PatientData,
    field: string,
    value: string | number | boolean
  ) => {
    // Tratamento específico para a lista de problemas
    if (section === "problemList") {
      let updatedProblems = [...patientData.problemList.problems];
      if (value) {
        if (!updatedProblems.some((p) => p.name === field)) {
          updatedProblems.push({ name: field });
        }
      } else {
        updatedProblems = updatedProblems.filter((p) => p.name !== field);
      }
      updatePatientData("problemList", { problems: updatedProblems });
      return;
    }

    // Para as demais seções (identification, physicalExam, lifeHabits, etc.)
    const currentSection = patientData[section] || {};
    updatePatientData(section, {
      ...currentSection,
      [field]: value,
    });
  };

  const getInputFieldValue = (section: keyof PatientData, field: string) => {
    return patientData[section]?.[field] ?? "";
  };

  // ======================================================
  // Funções Específicas para Exames Complementares
  // (Os exames são armazenados como um array de objetos)
  // ======================================================
  const findExam = (name: string): string | number | undefined => {
    return patientData.complementaryExams.exams.find(
      (exam: ExamData) => exam.name === name
    )?.value;
  };

  const getExamValue = (name: string): string | number | undefined => {
    if (!patientData.complementaryExams.exams) return undefined;
    return patientData.complementaryExams.exams.find(
      (exam: ExamData) => exam.name === name
    )?.value;
  };

  const updateExam = (name: string, value: string | number) => {
    const updatedExams = patientData.complementaryExams.exams.map((exam: ExamData) =>
      exam.name === name ? { ...exam, value } : exam
    );
    updatePatientData("complementaryExams", {
      date: patientData.complementaryExams.date,
      exams: updatedExams,
    });
  };

  const addExam = (
    name: string,
    value: string | number,
    abbreviation: string = ""
  ) => {
    const updatedExams = [
      ...patientData.complementaryExams.exams,
      { name, value, abbreviation },
    ];
    updatePatientData("complementaryExams", {
      date: patientData.complementaryExams.date,
      exams: updatedExams,
    });
  };

  const handleExamChange = (
    name: string,
    value: string | number,
    abbreviation?: string
  ) => {
    const examExists = patientData.complementaryExams.exams.some(
      (exam: ExamData) => exam.name === name
    );
    if (examExists) {
      updateExam(name, value);
    } else {
      addExam(name, value, abbreviation || "");
    }
  };

  return {
    ...context,
    // Funções Genéricas
    handleFieldChange,
    getInputFieldValue,
    // Funções Específicas para Exames
    findExam,
    getExamValue,
    handleExamChange,
  };
}
