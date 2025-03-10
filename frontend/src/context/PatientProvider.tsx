import { useEffect, useState, ReactNode } from "react";
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
    complementaryExams: {
      date: null,
      exams: [],
    },
  });

  useEffect(() => {
    console.log("📌 PatientProvider foi montado! (isso deve aparecer no preview)");
  }, []);

  const updatePatientData = <T extends keyof PatientData>(
    field: T,
    value: Partial<PatientData[T]>
  ) => {
    console.log(`📌 Atualizando ${field}:`, value);
    setPatientData((prev) => PatientDataService.updatePatientData(prev, field, value));
  };

  const updateExam = (examName: string, examValue: string) => {
    console.log(`📌 Atualizando exame: ${examName} para ${examValue}`);
    setPatientData((prev) => PatientDataService.updateComplementaryExam(prev, examName, examValue));
  };

  return (
    <PatientContext.Provider value={{ patientData, updatePatientData, updateExam }}>
      {children}
    </PatientContext.Provider>
  );
}
