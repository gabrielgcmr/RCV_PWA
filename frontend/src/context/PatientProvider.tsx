//Nota: Aplicar reducer futuramente!
import { useState, ReactNode, useCallback } from "react";
import { PatientContext } from "./PatientContext";
import { examDictionary } from "../constants/examDictionary";
import { Patient } from "../interfaces";
import generatePreventionList from "../services/clinical/summary/generatePreventionList";

// Objeto inicial tipado
const initialPatientState: Patient = {
  identification: {
    name: "",
    age: "",
    gender: "Male",
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
  preventionList: {
    prevention: [],
  },
};

export default function PatientProvider({ children }: { children: ReactNode }) {
  const [patient, setPatient] = useState<Patient>(initialPatientState);

  const updatePatient = useCallback(
    <T extends keyof Patient>(field: T, value: Partial<Patient[T]>) => {
      setPatient((prev) => {
        const updated = {
          ...prev,
          [field]: {
            ...prev[field],
            ...value,
          },
        };

        return {
          ...updated,
          preventionList: {
            prevention: generatePreventionList(updated),
          },
        };
      });
    },
    []
  );

  const updateExam = useCallback((examName: string, examValue: string) => {
    setPatient((prev) => {
      const examIndex = prev.complementaryExams.exams.findIndex(
        (e) => e.name === examName
      );

      const updatedExams = [...prev.complementaryExams.exams];
      const examDefinition = examDictionary[examName];

      if (examIndex !== -1) {
        updatedExams[examIndex] = {
          ...updatedExams[examIndex],
          value: examValue,
        };
      } else {
        updatedExams.push({
          name: examName,
          value: examValue,
          abbreviation: examDefinition?.abbreviation || "",
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
  }, []);

  return (
    <PatientContext.Provider value={{ patient, updatePatient, updateExam }}>
      {children}
    </PatientContext.Provider>
  );
}
