// src/store/usePatientStore.ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createIdentificationSlice, IdentificationSlice } from "./patient/identificationSlice";
import { createPreventionSlice, PreventionSlice } from "./patient/preventionSlice";
import { ProblemSlice } from "./patient/problemSlice";
import { PhysicalExamSlice } from "./patient/physicalExamSlice";

export interface PatientStore extends
  IdentificationSlice,
  PreventionSlice,
  ProblemSlice,
  PhysicalExamSlice,
  ExamSlice  
{}

// Cria o store combinando os slices e inicializando com os dados iniciais:
const usePatientStore = create<PatientStore>()(
  immer((set, get,api) => ({
    ...createIdentificationSlice(set, get, api),
    ...createPreventionSlice(set, get, api),
  }))
);

export default usePatientStore;