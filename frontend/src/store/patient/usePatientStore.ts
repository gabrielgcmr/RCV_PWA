// src/store/usePatientStore.ts
import { create } from 'zustand';
import { ClinicalPatientData, Problem } from '../../interfaces/Patient';
import { immer } from 'zustand/middleware';
import initialPatientState from '../../constants/initialPatientState';

interface PatientStore {
  patient: ClinicalPatientData;
  setPatient: (data: Partial<ClinicalPatientData>) => void;
  toggleProblem: (problem: Problem) => void;
  hasProblem: (code: string) => boolean;
  resetPatient: () => void;
}

export const usePatientStore = create<PatientStore>()(
  immer ((set,get)=>({
    patient: initialPatientState,
    
    
    
  
      toggleProblem: (problem) => set((state) => {
        const exists = state.patient.problemList.some(p => p.code === problem.code);
        if (exists) {
          state.patient.problemList = state.patient.problemList
            .filter(p => p.code !== problem.code);
        } else {
          state.patient.problemList.push(problem);
        }
      }),
      
      hasProblem: (code) => {
        return get().patient.problemList.some(p => p.code === code);
      },
    resetPatient: () => set({ patient: initialPatientState }),
  }));
    


  
  
  


