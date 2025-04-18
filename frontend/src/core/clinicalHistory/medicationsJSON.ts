//src/core/clinicalHistory/medicationsJSON.ts
import { JSONContent } from "@tiptap/react";

const MedicationsJSON = (): JSONContent => ({
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 4 },
      content: [{ type: "text", text: "💊 Medicações" }],
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

export default MedicationsJSON