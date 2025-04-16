import { Editor } from "@tiptap/react";
import { Identification } from "@/types";

export function updateIdentificationInEditor(editor: Editor, identification: Identification) {
  const updates = [
    { id: "fullName", value: `Nome: ${identification.fullName}` },
    { id: "age", value: `Idade: ${identification.age}` },
    { id: "gender", value: `Gênero: ${identification.gender}` },
    { id: "race", value: `Raça: ${identification.race}` },
  ];

  updates.forEach(({ id, value }) => {
    editor.commands.command(({ tr, state }) => {
      const nodeWithId = findNodeWithAttr(state.doc, id);
      if (!nodeWithId) return false;

      const { pos, node } = nodeWithId;

      const newNode = node.type.create({ ...node.attrs, id }, [
        state.schema.text(value),
      ]);

      tr.replaceWith(pos, pos + node.nodeSize, newNode);
      return true;
    });
  });
}

function findNodeWithAttr(doc: any, attrId: string) {
  let found: { pos: number; node: any } | null = null;

  doc.descendants((node: any, pos: number) => {
    if (node.attrs?.id === attrId) {
      found = { pos, node };
      return false;
    }
    return true;
  });

  return found;
}
