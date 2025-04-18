//src/core/clinicalHistory/allergiesJSON.ts
import { JSONContent } from "@tiptap/react";

const historyJSON = (): JSONContent => ({
  type: "doc",
  content: [
    {
        type: "heading",
        attrs: { level: 4 },
        content: [{ type: "text", text: "🕰️Antecedentes" }],
      },
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Hábitos de Vida" }],
              },
              {
                type: "bulletList",
                content: [
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "Não Avaliado" }],
                      },
                    ],
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
                content: [{ type: "text", text: "Ant. Patológicos" }],
              },
              {
                type: "bulletList",
                content: [
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "Não Avaliado" }],
                      },
                    ],
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
                content: [{ type: "text", text: "Ant. Familiares" }],
              },
              {
                type: "bulletList",
                content: [
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "Não Avaliado" }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
  ]
}
)

export default historyJSON