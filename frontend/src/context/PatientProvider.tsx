//Nota: Aplicar reducer futuramente!
import { useState, ReactNode } from "react";
import { PatientContext } from "./PatientContext";
import { PatientData } from "../interfaces/Patient";
import { examDictionary } from "../constants/examDictionary";

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

  const updatePatientData = <T extends keyof PatientData>(
    field: T,
    value: Partial<PatientData[T]>
  ) => {
    setPatientData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        ...value,
      },
    }));
  };

  const updateExam = (examName: string, examValue: string) => {
    setPatientData((prev) => {
      const updatedExams = [...prev.complementaryExams.exams];
      const index = updatedExams.findIndex((e) => e.name === examName);

      if (index !== -1) {
        updatedExams[index] = {
          ...updatedExams[index],
          value: examValue,
        };
      } else {
        updatedExams.push({
          name: examName,
          value: examValue,
          abbreviation: examDictionary[examName]?.abbreviation || "",
        });
      }

      return {
        ...prev,
        complementaryExams: {
          ...prev.complementaryExams,
          exams: updatedExams,
        },
      };
    });
  };

  return (
    <PatientContext.Provider
      value={{ patientData, updatePatientData, updateExam }}
    >
      {children}
    </PatientContext.Provider>
  );
}
