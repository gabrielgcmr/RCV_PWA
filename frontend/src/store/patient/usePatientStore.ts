// src/store/usePatientStore.ts
import { create } from 'zustand';
import { ClinicalPatientData } from '../../interfaces/patient/Patient';
import initialPatientState from '../../constants/initialPatientState';

interface PatientStore {
  patient: ClinicalPatientData;
  setPatient: (data: Partial<ClinicalPatientData>) => void;
  resetPatient: () => void;
}

export const usePatientStore = create<PatientStore>((set) => ({
  patient: initialPatientState,
  setPatient: (data) =>
    set((state) => ({
      patient: {
        ...state.patient,
        ...data,
      },
    })),
  resetPatient: () => set({ patient: initialPatientState }),
}));
