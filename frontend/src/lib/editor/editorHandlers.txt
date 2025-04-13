import { Identification } from "@/types";
import { Editor } from "@tiptap/react";

type IdentificationField = keyof Identification;

export const updateParagraphTextById = (
  editor: Editor,
  id: string,
  newText: string
): boolean => {
  if (!editor) return false;

  let updated = false;

  editor.commands.command(({ tr }) => {
    tr.doc.descendants((node, pos) => {
      if (node.type.name === "paragraph" && node.attrs?.id === id) {
        const newNode = node.type.create(
          { ...node.attrs },
          [editor.schema.text(newText)]
        );
        tr.replaceWith(pos, pos + node.nodeSize, newNode);
        updated = true;
        return false;
      }
      return true;
    });
    return updated;
  });

  return updated;
};

const fieldPrefixMap: Record<IdentificationField, string> = {
    fullName: "Nome:",
    age: "Idade:",
    gender: "Gênero:",
    race: "Raça:",
  };

export const updateIdentificationField = (
  editor: Editor | null,
  field: IdentificationField,
  value: string
): boolean => {
  if (!editor) return false;


  const prefix = fieldPrefixMap[field];
  return prefix ? updateParagraphTextById(editor, field, `${prefix} ${value}`) : false;
};