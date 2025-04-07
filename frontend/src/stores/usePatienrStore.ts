// src/stores/usePatientStore.ts
import { create } from "zustand";
import { Patient } from "../interfaces";
import { examDictionary } from "../constants/examDictionary";
import generatePreventionList from "../services/clinical/summary/generatePreventionList";

interface PatientStore {
  patient: Patient;
  updatePatient: <T extends keyof Patient>(
    field: T,
    value: Partial<Patient[T]>
  ) => void;
  updateExam: (examName: string, examValue: string) => void;
}

export const usePatientStore = create<PatientStore>((set) => ({
  patient: {
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
  },

  updatePatient: (field, value) => {
    set((state) => {
      const updated = {
        ...state.patient,
        [field]: {
          ...state.patient[field],
          ...value,
        },
      };

      const updatedPreventionList = generatePreventionList(updated);

      return {
        patient: {
          ...updated,
          preventionList: {
            prevention: updatedPreventionList,
          },
        },
      };
    });
  },

  updateExam: (examName, examValue) => {
    set((state) => {
      const exams = [...state.patient.complementaryExams.exams];
      const index = exams.findIndex((e) => e.name === examName);

      if (index !== -1) {
        exams[index] = {
          ...exams[index],
          value: examValue,
        };
      } else {
        exams.push({
          name: examName,
          value: examValue,
          abbreviation: examDictionary[examName]?.abbreviation || "",
        });
      }

      return {
        patient: {
          ...state.patient,
          complementaryExams: {
            ...state.patient.complementaryExams,
            exams,
          },
        },
      };
    });
  },
}));
