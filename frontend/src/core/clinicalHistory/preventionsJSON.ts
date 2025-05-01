// src/core/clinicalHistory/preventionsJSON.ts
import { ClinicalPatient } from "@/types";
import { JSONContent } from "@tiptap/react";

export function preventionsJSON(patient: ClinicalPatient): JSONContent {
  // Se não houver nenhuma prevenção cadastrada, exibimos um único item “Sem prevenções”
  const listItems =
    patient.preventions.length > 0
      ? patient.preventions.map((p) => {
          // monte o texto que você quer exibir; aqui uso “abreviação (descrição)”
          const label = p.abbreviation
            ? `${p.abbreviation}${p.description ? `: ${p.description}` : ""}`
            : `${p.name}${p.description ? `: ${p.description}` : ""}`;

          return {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: label }],
              },
            ],
          };
        })
      : [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Sem prevenções" }],
              },
            ],
          },
        ];

  return {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 4 },
        content: [{ type: "text", text: "✅ Prevenções" }],
      },
      {
        type: "bulletList",
        content: listItems,
      },
    ],
  };
}

export default preventionsJSON;
