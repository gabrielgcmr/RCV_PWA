import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

export function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }

  const { patientData, updatePatientData } = context;

  const findExam = (name: string) => {
    return patientData?.complementaryExams?.exams.find(exam => exam.name === name)?.value;
  };

  const getExamValue = (name: string) => {
    return patientData?.complementaryExams?.exams.find(exam => exam.name === name)?.value;
  };

   // Função para atualizar um exame no array
   const handleExamChange = (examName: string, value: string | number) => {
    const updatedExams = [...patientData.complementaryExams.exams];
    const examIndex = updatedExams.findIndex(exam => exam.name === examName);

    if (examIndex !== -1) {
      updatedExams[examIndex].value = value; // Atualiza exame existente
    } else {
      updatedExams.push({ name: examName, value }); // Adiciona novo exame se não existir
    }

    updatePatientData("complementaryExams", { 
      examsDate: patientData.complementaryExams.examsDate,
      exams: updatedExams });
  };

  return { ...context, findExam, getExamValue,handleExamChange };
}

