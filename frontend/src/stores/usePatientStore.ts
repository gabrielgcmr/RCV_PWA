// stores/patientStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import  initialPatientState  from '@/constants/initialPatientState';
import { ClinicalPatientData } from '@/interfaces/Patient';


type ProblemMode = "freestyle" | "ciap2" | "cid11";
interface PatientStore {
  patient: ClinicalPatientData;
  updatePatient: <T extends keyof ClinicalPatientData>(
    section: T,
    update: Partial<ClinicalPatientData[T]>
  ) => void;
  mode: ProblemMode;
  setMode: (mode: ProblemMode) => void;
  resetPatient: () => void;
}

export const usePatientStore = create<PatientStore>()(
  immer((set) => ({
    patient: initialPatientState,
    updatePatient: (section, update) => set((state) => {
      Object.assign(state.patient[section], update);
    }),
    mode: "freestyle",
    setMode: (mode) => set({ mode }),
    resetPatient: () => set({ patient: initialPatientState }),
  }))
);
