import { Identification } from "@/types";
import { JSONContent } from "@tiptap/react";

const IdentificationJSON = (
  identification: Identification
): JSONContent => ({
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
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
                text: `Gênero: ${identification.gender}`,
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
                text: `Raça: ${identification.race}`,
              },
            ],
          },
        ],
      },
    ],
  },
]})

export default IdentificationJSON