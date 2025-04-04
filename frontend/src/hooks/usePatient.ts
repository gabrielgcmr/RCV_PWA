import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { examDictionary } from "../constants/examDictionary";
import { Patient } from "../interfaces";

function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }

  const { patient, updatePatient } = context;
  // ====== FUNÇÃO GENÉRICA PARA ATUALIZAÇÃO ======
  const updateField = <T extends keyof Patient>(
    section: T,
    field: keyof Patient[T],
    value: Patient[T][keyof Patient[T]]
  ) => {
    updatePatient(section, {
      ...patient[section],
      [field]: value,
    });
  };
  
 // ====== FUNÇÕES DE PROBLEMAS ======
 const toggleProblem = (problemName: string, isChecked: boolean) => {
  const currentProblems = patient.problemList.problems || [];
  const updatedProblems = isChecked
    ? [...currentProblems, { name: problemName }]
    : currentProblems.filter(p => p.name !== problemName);

  updatePatient("problemList", {
    problems: updatedProblems,
  });
};

const hasProblem = (problemName: string): boolean => {
  return patient.problemList?.problems?.some(p => p.name === problemName) ?? false;
};


 // ====== FUNÇÕES DE EXAMES ======
 const getExamValue = (name: string): string | number | undefined => {
  return patient.complementaryExams?.exams?.find(exam => exam.name === name)?.value;
};

const updateExam = (name: string, value: string | number, abbreviation: string = "") => {
  const updatedExams = patient.complementaryExams.exams.map(exam => 
    exam.name === name ? { ...exam, value, abbreviation } : exam
  );

  updatePatient("complementaryExams", {
    ...patient.complementaryExams,
    exams: updatedExams,
  });
};

const handleExamChange = (name: string, value: string | number) => {
  const abbreviation = examDictionary[name]?.abbreviation || "";
  const examExists = patient.complementaryExams.exams.some(exam => exam.name === name);

  if (examExists) {
    updateExam(name, value, abbreviation);
  } else {
    updatePatient("complementaryExams", {
      ...patient.complementaryExams,
      exams: [
        ...patient.complementaryExams.exams,
        { name, value, abbreviation }
      ],
    });
  }
};

  return { ...context, updateField, toggleProblem, hasProblem, getExamValue, updateExam, handleExamChange,  };
}

export default usePatient;
