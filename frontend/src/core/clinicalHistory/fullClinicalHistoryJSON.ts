// src/core/clinicalHistory/clinicalHistoryJSON.ts
import { JSONContent } from "@tiptap/react";
import identificationJSON from "./identificationJSON";
import allergiesJSON from "./allergiesJSON";
import { ClinicalPatientData } from "@/types";

export default function clinicalHistoryJSON(patient: ClinicalPatientData): JSONContent {
  return {
    type: "doc",
    content: [
      ...(identificationJSON(patient.identification).content || []),
      ...(allergiesJSON().content || []),
      // Adicione outras seções aqui conforme necessário
      // ...problemsJSON(patient.problems).content,
      // ...examsJSON(patient.exams).content,
      // ...physicalExamJSON(patient.physicalExam).content,
    ],
  };
}