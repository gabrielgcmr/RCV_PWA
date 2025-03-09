import { useState, ReactNode } from "react";
import { PatientContext } from "./PatientContext";
import { PatientData } from "../interfaces/Interfaces";
import { PatientDataService } from "../services/PatientDataService";

export function PatientProvider({ children }: { children: ReactNode }) {
  const [patientData, setPatientData] = useState<PatientData>({
    identification: {
      name: "",
      age: "",
      gender: "",
      race: "",
    },
    problemList: {
      problems: [],
    },
    physicalExam: {
      systolicBP: "",
      diastolicBP: "",
    },
    lifeHabits: {
      isTreatingHAS: false,
      hasDiabetes: false,
      isSmoker: false,
    },
    complementaryExams: {
      date: "",
      exams: [], // Inicializamos com um array vazio para armazenar exames dinamicamente
    },
  });

  const updatePatientData = <T extends keyof PatientData>(
    field: T,
    value: Partial<PatientData[T]>
  ) => {
    setPatientData((prev) => PatientDataService.updatePatientData(prev, field, value));
  };

  const updateExam = (examName: string, examValue: string) => {
    setPatientData((prev) => PatientDataService.updateComplementaryExam(prev, examName, examValue));
  };

  return (
    <PatientContext.Provider value={{ patientData, updatePatientData, updateExam: updateExam }}>
      {children}
    </PatientContext.Provider>
  );
}
