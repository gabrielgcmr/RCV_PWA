//src/core/clinicalHistory/identificationJSON.ts
import { ClinicalPatient, Identification } from "@/types";
import { JSONContent } from "@tiptap/react";

const genderLabels: Record<Identification["gender"], string> = {
  "": "",
  male: "Masculino",
  female: "Feminino",
};

const raceLabels: Record<Identification["race"], string> = {
  "":"",
  white: "Branco",
  black: "Preto",
  other: "Outro",
};

const identificationJSON = (
  patient: ClinicalPatient
): JSONContent => ({
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 4 },
      content: [{ type: "text", text: "🏷️ Identificação" }],
    },
    {
    type: "bulletList",
    content: [
      {
        type: "listItem",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: `Idade: ${patient.identification.age}`,
              },
            ],
          },
        ],
      },
      {
        type: "listItem",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: `Gênero: ${
                  genderLabels[patient.identification.gender] ?? patient.identification.gender
                }`,
              },
            ],
          },
        ],
      },
      {
        type: "listItem",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: `Raça: ${
                  raceLabels[patient.identification.race] ?? patient.identification.race
                }`,
              },
            ],
          },
        ],
      },
    ],
  },
]})

export default identificationJSON