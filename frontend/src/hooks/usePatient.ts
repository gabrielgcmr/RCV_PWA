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
    if (!patientData?.complementaryExams?.exams) return undefined;
    return patientData.complementaryExams.exams.find(exam => exam.name === name)?.value;
  };

  const updateExam = (examName: string, value: string | number) => {
    const updatedExams = patientData.complementaryExams.exams.map((exam) =>
      exam.name === examName ? { ...exam, value } : exam
    );
  
    updatePatientData("complementaryExams", {
      examsDate: patientData.complementaryExams.examsDate,
      exams: updatedExams,
    });
  };
  
  const addExam = (examName: string, abbreviation:string, value: string | number) => {
    const updatedExams = [...patientData.complementaryExams.exams, { name: examName, abbreviation, value }];
  
    updatePatientData("complementaryExams", {
      examsDate: patientData.complementaryExams.examsDate,
      exams: updatedExams,
    });
  };
  
  const handleExamChange = (examName: string, abbreviation: string, value: string | number) => {
    const examExists = patientData.complementaryExams.exams.some(
      (exam) => exam.name === examName
    );
  
    if (examExists) {
      updateExam(examName, value);
    } else {
      addExam(examName, abbreviation, value);
    }
  };
  
  return { ...context, findExam, getExamValue,handleExamChange };
}

