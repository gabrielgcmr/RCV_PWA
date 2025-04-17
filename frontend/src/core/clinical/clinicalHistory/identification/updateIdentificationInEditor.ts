import { Editor } from "@tiptap/react";
import { Identification } from "@/types";
import { findNodeWithAttr } from "../utils/findNodeWithAttr";

export function updateIdentificationInEditor(editor: Editor, identification: Identification) {
  if (!editor) return false;
  const updates = [
    { id: "fullName", value: `Nome: ${identification.fullName}` },
    { id: "age", value: `Idade: ${identification.age}` },
    { id: "gender", value: `Gênero: ${identification.gender}` },
    { id: "race", value: `Raça: ${identification.race}` },
  ];

  editor.chain().focus().command(({ tr }) => {
    updates.forEach(({ id, value }) => {
      const nodeWithId = findNodeWithAttr(editor.state.doc, 'id', id);
      if (!nodeWithId) return;

      const { pos, node } = nodeWithId;

      // Cria um novo nó com o texto atualizado
      const newNode = node.type.create(
        { ...node.attrs }, 
        node.type.schema.text(value)
      );

      tr.replaceWith(pos, pos + node.nodeSize, newNode);
    });

    return true;
  }).run();
}

