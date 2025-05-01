import { ClinicalPatient, Problem } from "@/types";
import { JSONContent } from "@tiptap/react";

/**
 * Gera a seção de Problemas (Problem List) como JSONContent para o editor TipTap.
 */
export function problemsJSON(
  patient: ClinicalPatient
): JSONContent {
  // Monta os itens da lista de problemas ou exibe mensagem padrão
  const listItems =
    patient.problems.length > 0
      ? patient.problems.map((p: Problem) => {
          // Monta o rótulo: [CÓDIGO] Label ou Name (com data de início, se existir)
          const abbreviation = p.abbreviation;

          return {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: `${abbreviation} `,
                  },
                ],
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
                content: [
                  { type: "text", text: "Sem problemas" },
                ],
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
        content: [{ type: "text", text: "📋 Problemas" }],
      },
      {
        type: "bulletList",
        content: listItems,
      },
    ],
  };
}

export default problemsJSON;
