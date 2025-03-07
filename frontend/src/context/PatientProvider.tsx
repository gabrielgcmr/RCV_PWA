import { useState, ReactNode } from "react";
import { PatientData } from "../interfaces/PatientData";
import { PatientDataService } from "../services/PatientDataService";
import { PatientContext } from "./PatientContextType";

const initialPatientData: PatientData = {
  identification: { name: "", age: "", gender: "", race: "" },
  problemList: { problems: [] },
  physicalExam: { systolicBP: "", diastolicBP: "" },
  lifeHabits: { isTreatingHAS: false, hasDiabetes: false, isSmoker: false },
  complementaryExams: { date: new Date(), exams: [] },
};

export function PatientProvider({ children }: { children: ReactNode }) {
  const [patientData, setPatientData] = useState<PatientData>(initialPatientData);

  const updatePatientData = (
    section: keyof PatientData,
    field: string,
    value: string | number | boolean,
    options?: { exam?: boolean; abbreviation?: string }
  ) => {
    if (section === "complementaryExams" && options?.exam) {
      // Atualiza ou adiciona um exame
      setPatientData((prev) =>
        PatientDataService.updateComplementaryExam(
          prev,
          field,
          value as string | number,
          options.abbreviation
        )
      );
    } else {
      // Atualiza os demais campos
      setPatientData((prev) =>
        PatientDataService.updatePatientData(prev, section, { [field]: value } as Partial<PatientData[typeof section]>)
      );
    }
  };

  return (
    <PatientContext.Provider value={{ patientData, updatePatientData }}>
      {children}
    </PatientContext.Provider>
  );
}
