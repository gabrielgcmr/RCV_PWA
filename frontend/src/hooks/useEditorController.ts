import { useEffect } from "react";
import { Editor } from "@tiptap/react";
import { usePatientStore } from "../store";
import { sectionMappings } from "@/components/editors/SectionMapping";


// Função auxiliar para atualizar um parágrafo com prefixo fixo
export const updateFieldWithPrefix = (
  editor: Editor,
  nodeId: string,
  prefix: string,
  value: string
) => {
  if (!editor) return;

  editor.commands.command(({ tr, state }) => {
    const schema = (state as any).schema;
    let updated = false;

    state.doc.descendants((node, pos) => {
      if (node.type.name === "paragraph" && node.attrs && node.attrs.id === nodeId) {
        const newText = `${prefix} ${value}`;
        console.log(`Atualizando o nó com id: ${nodeId} para: ${newText}`)
        const newTextNode = schema.text(newText);
        // Cria um novo parágrafo com os mesmos atributos e com o novo conteúdo
        const newParagraph = schema.nodes.paragraph.create(node.attrs, [newTextNode]);
        tr.replaceWith(pos, pos + node.nodeSize, newParagraph);
        updated = true;
        return false; // Para a busca após encontrar o nó
      }
      return true;
    });

    if (updated) {
      console.log("Transação despachada para atualizar o nó:", nodeId);
      editor.view.dispatch(tr);
    }
    return updated;
  });
};

// Exemplo do hook useEditorController
export const useEditorController = ({ editor }: { editor: Editor | null }) => {
  const { patient } = usePatientStore();

  // Exemplo: atualizar a seção de identificação (nome, idade, gênero, raça)
  // Considerando que em sectionMappings definimos o mapeamento para identificação:
  const identificationMapping = sectionMappings.find(
    (mapping) => mapping.sectionId === "identificacao"
  );

  useEffect(() => {
    if (!editor || !identificationMapping) return;

    // Atualiza cada campo da seção de identificação usando os fieldPaths definidos
    if (identificationMapping.fieldPaths) {
      const { fieldPaths } = identificationMapping;
      Object.entries(fieldPaths).forEach(([fieldKey, prefix]) => {
        // O valor atual do campo (por exemplo, fullName, age, etc.)
        const value = (patient.identification as any)[fieldKey] || "";
        // Supondo que os nós no editor tenham ids iguais aos nomes dos campos: "fullName", "age", etc.
        updateFieldWithPrefix(editor, fieldKey, prefix, value);
      });
    }
  }, [editor, patient.identification]);

  // Você pode adicionar mais efeitos para outras seções do documento
  // Exemplo: alergias, problemas, prevenções, etc.
};
