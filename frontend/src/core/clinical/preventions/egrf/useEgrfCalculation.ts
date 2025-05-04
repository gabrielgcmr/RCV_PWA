// src/core/clinical/preventions/useEgfrPrevention.ts
import { usePatientStore } from "@/store";
import { useShallow } from 'zustand/react/shallow'
import { Exam } from "@/types";
import { buildEgfrPrevention } from "./buildEgfrPrevention";
import { useMemo } from "react";

interface PatientState {
  identification: {
    age: string;
    gender: string;
    race: string;
  };
  getExam: (key: string) => Exam | undefined;
}

export function useEgfrPrevention() {
  const {
    age,
    gender,
    race,
    creatinineExam,

  } = usePatientStore(
    useShallow((state: PatientState) => ({
      age: state.identification.age,
      gender: state.identification.gender,
      race: state.identification.race,
      creatinineExam: state.getExam("creatinine"),

    }))
  );

  return useMemo(() => {
    const creatValue = Number(creatinineExam?.value);
    const numericAge = Number(age);
    if (!creatinineExam?.date || isNaN(creatValue)) return null;
    
    return buildEgfrPrevention(
      numericAge,
      gender,
      race,
      creatValue,
      creatinineExam.date,
    );
  }, [age, gender, race, creatinineExam]);
}