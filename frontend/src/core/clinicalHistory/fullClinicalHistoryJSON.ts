// src/core/clinicalHistory/clinicalHistoryJSON.ts
import { JSONContent } from "@tiptap/react";
import identificationJSON from "./identificationJSON";
import allergiesJSON from "./allergiesJSON";
import { ClinicalPatient } from "@/types";
import preventionsJSON from "./preventionsJSON";
import problemsJSON from "./problemsJSON";
import MedicationsJSON from "./medicationsJSON";
import historyJSON from "./histoyJSON";
import examsJSON from "./examsJSON";
import presentIllnessJSON from "./presentIllnessJSON";

export default function clinicalHistoryJSON(patient: ClinicalPatient): JSONContent {
  return {
    type: "doc",
    content: [
      ...(identificationJSON(patient).content || []),
      ...(allergiesJSON().content || []),
      ...(problemsJSON(patient).content || []),
      ...(MedicationsJSON().content || []),
      ...(preventionsJSON(patient).content || [] ),
      ...(historyJSON().content || []),
      ...(examsJSON(patient).content || []),
      ...(presentIllnessJSON().content || [] )
      // Adicione outras seções aqui conforme necessário

    ],
  };
}