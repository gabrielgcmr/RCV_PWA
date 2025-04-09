import { useEffect } from "react";
import { usePatientStore } from "../../../store";

import { Editor } from "@tiptap/react";
import { updateFieldWithPrefix } from "@/hooks/useEditorController";

function AgeUpdater({ editor }: { editor: Editor | null }) {
  const { patient } = usePatientStore();

  useEffect(() => {
    if (editor) {
      // Atualiza o parágrafo com id "age" usando o prefixo "Idade:" e o valor do estado
      updateFieldWithPrefix(editor, "age", "Idade:", patient.identification.age);
    }
  }, [editor, patient.identification.age]);

  return null;
}

export default AgeUpdater;
