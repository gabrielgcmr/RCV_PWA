import { useContext } from "react";
import { ExamData } from "../interfaces/ExamData";
import { PatientContext } from "../context/PatientContextType";
import { FormSection } from "../components/common/Inputs/BaseInput/types";

export function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }
  
  const { patientData, updatePatientData } = context;

  // ======================================================
  // Função Genérica para Atualizar Qualquer Seção (Wrapper)
  // ======================================================
  const updatePatientField = (
    section: FormSection,
    field: string,
    value: string | number
  ) => {
    updatePatientData(section, field, value);
  };
   

  // ======================================================
  // Funções Específicas para Exames Complementares
  // ======================================================
  const getExamValue = (name: string): string | number | undefined => {
    return patientData.complementaryExams.exams.find(
      (exam: ExamData) => exam.name === name
    )?.value;
  };


  const handleExamChange = (
    name: string,
    value: string | number | boolean,
    abbreviation?: string
  ) => {
    // Aqui, usamos a função unificada, informando que estamos lidando com um exame.
    updatePatientData("complementaryExams", name, value, { exam: true, abbreviation });
  };

  // ======================================================
  // Funções Específicas para a Lista de Problemas
  // ======================================================
  

  const updateProblemList = (problemName: string, isActive: boolean) => {
    // Começamos com uma cópia da lista atual de problemas
    let updatedProblems = [...patientData.problemList.problems];

    if (isActive) {
      // Se o problema não está presente, adiciona-o
      if (!updatedProblems.some((p) => p.name === problemName)) {
        updatedProblems.push({ name: problemName });
      }
    } else {
      // Remove o problema se ele estiver presente
      updatedProblems = updatedProblems.filter((p) => p.name !== problemName);
    }

    updatePatientData("problemList", "problems", updatedProblems as unknown as string|number|boolean);
  };

  const hasProblem = (problemName: string): boolean => {
    return patientData.problemList.problems.some((p) => p.name === problemName);
  };


  return {
    ...context,
    // Expondo as funções genéricas
    handleFieldChange: updatePatientField,
    getFieldValue,
    hasProblem,
    // Expondo as funções específicas para exames
    getExamValue,
    handleExamChange,
    updateProblemList
  };
}
