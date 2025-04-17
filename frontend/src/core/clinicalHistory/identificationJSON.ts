//src/core/clinicalHistory/identificationJSON.ts
import { Identification } from "@/types";
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
  identification: Identification
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
                text: `Nome: ${identification.fullName}`,
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
                text: `Idade: ${identification.age}`,
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
                  genderLabels[identification.gender] ?? identification.gender
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
                  raceLabels[identification.race] ?? identification.race
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