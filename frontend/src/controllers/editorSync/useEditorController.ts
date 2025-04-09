import { Editor } from "@tiptap/react";

/**
 * Atualiza o conteúdo de um <p> com base no id HTML.
 */
export const updateParagraphTextById = (
  editor: Editor,
  id: string,
  newText: string
) => {
  if (!editor) return false;

  let updated = false;

  editor.commands.command(({ tr }) => {
    console.log("🧠 Procurando nó pelo id:", id);

    tr.doc.descendants((node, pos) => {
      if (node.type.name === "paragraph" && node.attrs?.id === id) {
        const newNode = node.type.create(
          { ...node.attrs }, // mantém os atributos (inclusive o id)
          [editor.schema.text(newText)] // novo conteúdo
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
