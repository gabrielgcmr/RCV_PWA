import { create } from 'zustand';

import initialPatientState from '../constants/initialPatientState';
import { ClinicalPatientData } from '../types';

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