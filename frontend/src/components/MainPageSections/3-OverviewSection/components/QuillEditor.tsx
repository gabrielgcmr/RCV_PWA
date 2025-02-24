import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Importe o tema padrão do Quill

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export default function QuillEditor({ value, onChange }: QuillEditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      // Inicializa o editor
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"], // Remove formatação
          ],
        },
      });

      // Atualiza o conteúdo
      const handleTextChange = () => {
        const html = editorRef.current?.querySelector(".ql-editor")?.innerHTML;
        onChange(html || "");
      };

      quillRef.current.on("text-change", handleTextChange);

      // Limpeza do listener
      return () => {
        if (quillRef.current) {
          quillRef.current.off("text-change", handleTextChange);
        }
      };
    }
  }, [onChange]);

  // Atualiza o valor do editor externo
  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      // Atualiza o conteúdo do editor sempre que `value` mudar
      const currentSelection = quillRef.current.getSelection();
      quillRef.current.root.innerHTML = value;
  
      // Mantém o cursor na posição anterior
      if (currentSelection) {
        quillRef.current.setSelection(currentSelection);
      }
    }
  }, [value]);
}