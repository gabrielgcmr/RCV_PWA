import { useState, ReactNode } from "react";
import { PatientContext } from "./PatientContext";
import { IPatientData } from "../interfaces/IPatientData";
import { PatientDataService } from "../services/PatientDataService";

export function PatientProvider({ children }: { children: ReactNode }) {
  const [patientData, setPatientData] = useState<IPatientData>({
    identification: {
      name: "",
      age: "",
      gender: "",
      race: "",
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
      examsDate: "",
      exams: [], // Inicializamos com um array vazio para armazenar exames dinamicamente
    },
  });

  const updatePatientData = <T extends keyof IPatientData>(
    field: T,
    value: Partial<IPatientData[T]>
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
