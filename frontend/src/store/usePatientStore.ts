import { create } from 'zustand';
import { immer } from "zustand/middleware/immer";
import initialPatientState from '../constants/initialPatientState';
import { ClinicalPatientData } from '../types';

interface PatientStore {
  patient: ClinicalPatientData;
  updatePatient: <T extends keyof ClinicalPatientData>(
    field: T,
    value: Partial<ClinicalPatientData[T]>
  ) => void;
  resetPatient: () => void;
}


export const usePatientStore = create<PatientStore>()(
  immer((set) => ({
    patient: initialPatientState,
    updatePatient: (field, value) =>
      set((state) => {
        // Com immer, você pode alterar o estado "mutativamente"
        state.patient[field] = {
          ...state.patient[field],
          ...value,
        };
      }),
    resetPatient: () =>
      set((state) => {
        state.patient = initialPatientState;
      }),
  }))
);