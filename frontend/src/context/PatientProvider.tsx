//Nota: Aplicar reducer futuramente!
import { useState, ReactNode } from "react";
import { PatientContext } from "./PatientContext";
import { examDictionary } from "../constants/examDictionary";
import { Patient } from "../interfaces";

export default function PatientProvider({ children }: { children: ReactNode }) {
  const [patient, setPatient] = useState<Patient>({
    identification: {
      name: "",
      age: "",
      gender: "",
      race: "",
    },
    preventionList: {
      prevention: [],
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

  const updatePatient = <T extends keyof Patient>(
    field: T,
    value: Partial<Patient[T]>
  ) => {
    setPatient((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        ...value,
      },
    }));
  };

  const updateExam = (examName: string, examValue: string) => {
    setPatient((prev) => {
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
      value={{ patient: patient, updatePatient, updateExam }}
    >
      {children}
    </PatientContext.Provider>
  );
}
