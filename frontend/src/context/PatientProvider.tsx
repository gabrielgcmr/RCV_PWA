import { useState, ReactNode } from "react";
import { PatientData, PatientDataSection } from "../interfaces/PatientData";
import { PatientService } from "../services/PatientService";
import { PatientContext } from "./PatientContextType";

const initialPatientData: PatientData = {
  identification: { name: "", age: "", gender: "", race: "" },
  problemList: { problems: [] },
  physicalExam: { systolicBP: "", diastolicBP: "" },
  complementaryExams: { date: new Date(), exams: [] },
};

export function PatientProvider({ children }: { children: ReactNode }) {
  const [patientData, setPatientData] = useState<PatientData>(initialPatientData);

  const updatePatientData = (
    section: PatientDataSection,
    field:  keyof PatientData[typeof section],
    value: PatientData[typeof section][typeof field]
  ) => {
      // Atualiza os demais campos
      setPatientData((prev) =>
        PatientService.updatePatientData(prev, section, field, value)
      );
    }


  return (
    <PatientContext.Provider value={{ patientData, updatePatientData }}>
      {children}
    </PatientContext.Provider>
  );
}
