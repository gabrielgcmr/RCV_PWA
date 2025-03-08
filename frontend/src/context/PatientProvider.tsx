import { useState, ReactNode, useCallback } from "react";
import { PatientData} from "../interfaces/Interfaces";
import { PatientContext } from "./PatientContext";

const initialPatientData: PatientData = {
  identification: { name: "", age: "", gender: "", race: "" },
  problemList: { problems: [] },
  physicalExam: { systolicBP: "", diastolicBP: "" },
  complementaryExams: { date: new Date(), exams: [] },
};

export function PatientProvider({ children }: { children: ReactNode }) {
  const [patientData, setPatientData] = useState<PatientData>(initialPatientData);

  const updatePatientData = useCallback(
    <S extends keyof PatientData>(
      section: S,
      field: Partial<PatientData[S]>
  ) => {
    setPatientData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...field,
      },
    }));
  },
  []
);

const updateExam = useCallback ((examName: string, examValue: string|number) => {
  setPatientData((prev) => ({
    ...prev,
    complementaryExams: {
      ...prev.complementaryExams,
      exams: {
        ...prev.complementaryExams.exams,
        [examName]: examValue, // Atualiza o exame específico
      },
    },
  }));
},[])

const toggleProblem = useCallback((problemName: string) => {
  setPatientData((prev) => {
    const existingProblems = prev.problemList.problems.map((p) => p.name);

    return {
      ...prev,
      problemList: {
        problems: existingProblems.includes(problemName)
          ? prev.problemList.problems.filter((p) => p.name !== problemName) // Remove se já existe
          : [...prev.problemList.problems, { name: problemName }], // Adiciona se não existe
      },
    };
  });
}, []);

  const contextValue: PatientContext = {
    patientData,
    updatePatientData,
    updateExam,
    toggleProblem // Adicionado aqui
  };

  return (
    <PatientContext.Provider value={ contextValue }>
      {children}
    </PatientContext.Provider>
  );
}
