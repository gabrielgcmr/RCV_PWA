// src/stores/patientStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type Identification = {
  name: string;
  age: string;
  gender: 'Male' | 'Female' | '';
  race: string;
};

type PatientState = {
  identification: Identification;
  setName: (name: string) => void;
  setAge: (age: string) => void;
  setGender: (gender: 'Male' | 'Female') => void;
  setRace: (race: string) => void;
};

const usePatientStore = create<PatientState>()(
  immer((set) => ({
    identification: {
      name: '',
      age: '',
      gender: '',
      race: '',
    },
    setName: (name) =>
      set((state) => {
        state.identification.name = name;
      }),
    setAge: (age) =>
      set((state) => {
        state.identification.age = age;
      }),
    setGender: (gender) =>
      set((state) => {
        state.identification.gender = gender;
      }),
    setRace: (race) =>
      set((state) => {
        state.identification.race = race;
      }),
  }))
);

export default usePatientStore;
