import { useEffect, useRef, JSX } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export default function QuillEditor({ value, onChange }: QuillEditorProps): JSX.Element {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);

  // Inicializa o Quill apenas uma vez
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
      });
      quillRef.current = quill;

      // Define o conteúdo inicial sem disparar eventos
      const delta = quill.clipboard.convert({ html: value });
      quill.setContents(delta, "silent");

      // Atualiza o estado do React quando o conteúdo muda
      const handleTextChange = () => {
        const html = quill.root.innerHTML;
        onChange(html);
      };

      quill.on("text-change", handleTextChange);

      // Cleanup: remove o listener ao desmontar
      return () => {
        quill.off("text-change", handleTextChange);
      };
    }
  }, [onChange, value]);

  // Atualiza o conteúdo do editor se o valor externo mudar (sem loop infinito)
  useEffect(() => {
    const quill = quillRef.current;
    if (quill) {
      const currentHtml = quill.root.innerHTML;
      if (currentHtml !== value) {
        const delta = quill.clipboard.convert({ html: value });
        quill.setContents(delta, "silent");
      }
    }
  }, [value]);

  return <div ref={editorRef} style={{ height: "300px", background: "white" }} />;
}
