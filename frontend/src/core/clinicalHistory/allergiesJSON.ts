//src/core/clinicalHistory/allergiesJSON.ts
import { JSONContent } from "@tiptap/react";

const allergiesJSON = (): JSONContent => ({
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 4 },
      content: [{ type: "text", text: "🚨 Alergias" }],
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
                text: "Nenhuma",
              },
            ],
          },
        ],
      },
    ],
  },
]})

export default allergiesJSON