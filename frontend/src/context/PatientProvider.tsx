//Nota: Aplicar reducer futuramente!
import { useState, ReactNode } from "react";
import { PatientContext } from "./PatientContext";
import { examDictionary } from "../constants/examDictionary";
import { ClinicalPatientData } from "../interfaces";
import generatePreventionList from "../services/clinical/summary/generatePreventionList";

export default function PatientProvider({ children }: { children: ReactNode }) {
  const [patient, setPatient] = useState<ClinicalPatientData>({
    identification: {
      fullName: "",
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

  const updatePatient = <T extends keyof ClinicalPatientData>(
    field: T,
    value: Partial<ClinicalPatientData[T]>
  ) => {
    setPatient((prev) => {
      const updated = {
        ...prev,
        [field]: {
          ...prev[field],
          ...value,
        },
      };
      console.log(patient);
      // 🔁 Gera a lista atualizada de prevenções com base no novo estado do paciente
      const updatedPreventionList = generatePreventionList(updated);

      return {
        ...updated,
        preventionList: {
          prevention: updatedPreventionList,
        },
      };
    });
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
    <PatientContext.Provider value={{ patient, updatePatient, updateExam }}>
      {children}
    </PatientContext.Provider>
  );
}
