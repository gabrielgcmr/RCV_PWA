import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Patient } from '@/interfaces/Patient';

interface PatientState {
  patient: Patient;
  setName: (name: string) => void;
  setAge: (age: string) => void;
  setGender: (gender: string) => void;
  setRace: (race: string) => void;
  resetPatient: () => void;
}

const initialState: Patient = {
  identification: {
    name: '',
    age: '',
    gender: '',
    race: '',
  },
  preventionList: {
    preventions:[],
  },
  problemList: {
    problems: [],
  },
  physicalExam: {
    systolicBP: '',
    diastolicBP: '',
  },
  complementaryExams: {
    date: null,
    exams: [],
  },
};

export const usePatientStore = create<PatientState>()(
  immer((set) => ({
    patient: initialState,

    setName: (name) =>
      set((state) => {
        state.patient.identification.name = name;
      }),

    setAge: (age) =>
      set((state) => {
        state.patient.identification.age = age;
      }),

    setGender: (gender) =>
      set((state) => {
        state.patient.identification.gender = gender;
      }),

    setRace: (race) =>
      set((state) => {
        state.patient.identification.race = race;
      }),

    resetPatient: () => set(() => ({ patient: initialState })),
  }))
);
