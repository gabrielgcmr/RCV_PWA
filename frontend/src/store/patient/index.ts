// src/store/patient/index.ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { ClinicalPatientData } from "@/types";

import { createProblemSlice, ProblemSlice } from "./problemSlice";
import { createPhysicalExamSlice, PhysicalExamSlice } from "./physicalExamSlice";
import { createIdentificationSlice, IdentificationSlice } from "./identificationSlice";
import { createPreventionSlice, PreventionSlice } from "./preventionSlice";

// Tipagem final do store
export type PatientStore = ClinicalPatientData &
    IdentificationSlice &
    PreventionSlice & 
    ProblemSlice &
    PhysicalExamSlice // & ExamSlice & PreventionSlice ...;

export const usePatientStore = create<PatientStore>()(
  immer((...args) => ({
    ...createIdentificationSlice(...args),
    ...createPreventionSlice(...args),
    ...createProblemSlice(...args),
    ...createPhysicalExamSlice(...args),

 
  }))
);
