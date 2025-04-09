import { Editor } from "@tiptap/react";
import { updateParagraphTextById } from "./useEditorController";


export const updateIdentificationFieldInEditor = (
  editor: Editor | null,
  field: "fullName" | "age" | "gender" | "race",
  value: string
) => {
  if (!editor) return;

  const prefixMap: Record<string, string> = {
    fullName: "Nome:",
    age: "Idade:",
    gender: "Gênero:",
    race: "Raça:",
  };

  const prefix = prefixMap[field];
  if (prefix) {
    updateParagraphTextById(editor, field, `${prefix} ${value}`);
  }
};
