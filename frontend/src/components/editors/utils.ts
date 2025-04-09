import { Editor } from "@tiptap/react";

/**
 * Atualiza o texto do parágrafo identificado pelo nodeId, mantendo um prefixo fixo.
 *
 * @param editor - a instância do TipTap Editor.
 * @param nodeId - o id do nó (definido nos atributos) que queremos atualizar.
 * @param prefix - o prefixo que sempre deve estar presente (ex: "Nome:").
 * @param value - a parte editável que vem do input.
 */
export const updateFieldWithPrefix = (
  editor: Editor,
  nodeId: string,
  prefix: string,
  value: string
) => {
  if (!editor) return;

  editor.commands.command(({ tr, state }) => {
    // Forçamos o acesso ao schema, já que state.schema existe na prática, mas o tipo CommandProps não o declara.
    const schema = (state as any).schema;
    let updated = false;
    
    state.doc.descendants((node, pos) => {
      if (node.type.name === "paragraph" && node.attrs && node.attrs.id === nodeId) {
        const newText = `${prefix} ${value}`;
        const newTextNode = schema.text(newText);
        // Cria um novo nó paragraph com os mesmos atributos e o novo conteúdo
        const newParagraph = schema.nodes.paragraph.create(node.attrs, newTextNode);
        tr.replaceWith(pos, pos + node.nodeSize, newParagraph);
        updated = true;
        return false; // interrompe a busca
      }
      return true;
    });

    if (updated) {
      editor.view.dispatch(tr);
    }
    return updated;
  });
};
