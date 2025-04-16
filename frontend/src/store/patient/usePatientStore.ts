// src/store/patient/index.ts
import { create } from "zustand";
import { immer,  } from "zustand/middleware/immer";
import { persist,devtools, createJSONStorage } from "zustand/middleware";
import { PatientStore } from "./interface";
import { createIdentificationSlice } from "./identificationSlice";
import { createPreventionSlice } from "./preventionSlice";
import { createProblemSlice } from "./problemSlice";
import { createPhysicalExamSlice } from "./physicalExamSlice";
import { createExamSlice } from "./examSlice";
import { createClinicalHistorySlice } from "./clinicalHistorySlice";
import { createMetaSlice } from "./metaSlice";

export const usePatientStore = create<PatientStore>()(
  devtools(
    persist(
      immer((...args) => ({
        ...createIdentificationSlice(...args),
        ...createPreventionSlice(...args),
        ...createProblemSlice(...args),
        ...createPhysicalExamSlice(...args),
        ...createExamSlice(...args),
        ...createClinicalHistorySlice(...args),
        ...createMetaSlice(...args),
      })),
      {
        name: "patient-storage", // unique name
        storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
      }
    ),
    {
      name: "PatientStore",
    }
  )
);
