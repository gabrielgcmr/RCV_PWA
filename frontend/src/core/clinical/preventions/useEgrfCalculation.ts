// src/core/clinical/preventions/useEgfrPrevention.ts
import { usePatientStore } from "@/store";
import { shallow } from "zustand/shallow";

import { Exam } from "@/types";
import { buildEgfrPrevention } from "../Renal/preventions/buildEgfrPrevention";

interface PatientState {
  identification: {
    age: string;
    gender: string;
    race: string;
  };
  getExam: (key: string) => Exam | undefined;
  preventions: { abbreviation: string }[];
}

export function useEgfrPrevention() {
  const {
    age,
    gender,
    race,
    creatinineExam,
    preventions
  } = usePatientStore((state: PatientState) => ({
    age: state.identification.age,
    gender: state.identification.gender,
    race: state.identification.race,
    creatinineExam: state.getExam("creatinine"),
    preventions: state.preventions
  }));

  // Converter idade para número (tratando valores inválidos)
  const numericAge = Number(age) || 0;
  
  // Extrair valores do exame de creatinina
  const creatValue = Number(creatinineExam?.value) || 0;
  const creatDate = creatinineExam?.date || new Date().toISOString();

  const existingCount = preventions.filter(p => p.abbreviation === "eGFR").length;

  return buildEgfrPrevention(
    numericAge,
    gender,
    race,
    creatValue,
    existingCount,
    creatDate
  );
}