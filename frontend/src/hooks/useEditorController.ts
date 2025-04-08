import { useEffect } from "react";
import { Editor } from "@tiptap/react";
import { JSONContent } from "@tiptap/react";
import { usePatientStore } from "../store";

interface UseEditorControllerProps {
  editor: Editor | null;
}

export const useEditorController = ({ editor }: UseEditorControllerProps) => {
  const { patient, setPatient } = usePatientStore();

  // Exemplo: atualizar o editor quando o nome muda
  useEffect(() => {
    if (!editor) return;
    // Exemplo de busca: encontre o bullet que contém "Nome:" no conteúdo e substitua
    // Isso exige que você saiba como identificar o bloco correto.
    editor.commands.command(({ tr, state }) => {
      const { doc } = state;
      let updated = false;

      // Percorre todos os nós do documento
      doc.descendants((node, pos) => {
        // Suponha que você tenha um bulletList com um listItem onde o parágrafo inicia com "Nome:" 
        if (node.type.name === "paragraph" && node.textContent.startsWith("Nome:")) {
          // Substitua com o valor atual
          const newText = `Nome: ${patient.identification.fullName || ""}`;
          tr.insertText(newText, pos, pos + node.nodeSize);
          updated = true;
          return false; // parar após encontrar
        }
        return true;
      });

      if (updated) {
        editor.view.dispatch(tr);
      }
      return true;
    });
  }, [editor, patient.identification.fullName]);

  // Efeito: atualizar o estado quando o editor mudar
  useEffect(() => {
    if (!editor) return;

    const updateStateFromEditor = () => {
      const json: JSONContent = editor.getJSON();
      // Exemplo: percorre o JSON para encontrar o nó de identificação e extraia o nome
      // Você pode criar funções auxiliares para buscar por `sectionId` ou padrões de texto
      const newName = extractNameFromJson(json);
      if (newName !== null && newName !== patient.identification.fullName) {
        setPatient({
          identification: {
            ...patient.identification,
            fullName: newName,
          },
        });
      }
    };

    editor.on("update", updateStateFromEditor);

    return () => {
      editor.off("update", updateStateFromEditor);
    };
  }, [editor, patient.identification.fullName, setPatient]);

  // Função auxiliar para extrair o nome do documento JSON
  function extractNameFromJson(doc: JSONContent): string | null {
    // Percorrer o doc para encontrar o parágrafo cujo texto começa com "Nome:" 
    if (!doc.content) return null;

    for (const node of doc.content) {
      if (node.type === "bulletList" && node.content) {
        for (const item of node.content) {
          const paragraph = item.content?.find(
            (child: any) => child.type === "paragraph"
          );
          if (paragraph && paragraph.content) {
            const text = paragraph.content.map((c: any) => c.text).join("");
            if (text.startsWith("Nome:")) {
              return text.replace("Nome:", "").trim();
            }
          }
        }
      }
    }
    return null;
  }
};
