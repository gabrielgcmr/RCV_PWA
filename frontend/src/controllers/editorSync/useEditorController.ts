import { Editor } from "@tiptap/react";

/**
 * Atualiza o conteúdo de um <p> com base no id HTML.
 */
export const updateParagraphTextById = (
  editor: Editor,
  id: string,
  newText: string
) => {
  if (!editor) return;

  editor.commands.command(({ tr, state }) => {
    const { doc, schema } = state;
    let updated = false;

    console.log("🧠 Procurando nó pelo id:", id);

    doc.descendants((node, pos) => {
      if (node.type.name === "paragraph") {
        console.log("🔍 Nós diponíveis:", node.attrs.id);
      }
      if (node.type.name === "paragraph" && node.attrs?.id === id) {
        const newNode = schema.nodes.paragraph.create(
          { ...node.attrs }, // mantém os atributos (inclusive o id)
          [schema.text(newText)] // novo conteúdo
        );

        tr.replaceWith(pos, pos + node.nodeSize, newNode);
        updated = true;
        return false;
      }
      
      return true;
    });

    

    if (updated) {
      editor.view.dispatch(tr);
    }

    return updated;
  });
};
