// src/hooks/usePatientSelector.ts

import { usePatientStore } from "@/stores/usePatienrStore";


export const usePatientSelector = () => {
  const patient = usePatientStore((state) => state.patient);
  const updatePatient = usePatientStore((state) => state.updatePatient);
  const updateExam = usePatientStore((state) => state.updateExam);

  return {
    patient,
    updatePatient,
    updateExam,
  };
};
