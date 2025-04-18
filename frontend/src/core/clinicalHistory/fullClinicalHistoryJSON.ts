// src/core/clinicalHistory/clinicalHistoryJSON.ts
import { JSONContent } from "@tiptap/react";
import identificationJSON from "./identificationJSON";
import allergiesJSON from "./allergiesJSON";
import { ClinicalPatientData } from "@/types";
import preventionsJSON from "./preventionsJSON";

export default function clinicalHistoryJSON(patient: ClinicalPatientData): JSONContent {
  return {
    type: "doc",
    content: [
      ...(identificationJSON(patient).content || []),
      ...(allergiesJSON().content || []),
      ...(preventionsJSON(patient).content || [] )
      // Adicione outras seções aqui conforme necessário

    ],
  };
}