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

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
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

      const quill = quillRef.current;

      // Atualiza o estado do React ao digitar
      quill.on("text-change", () => {
        onChange(quill.root.innerHTML);
      });
    }
  }, [onChange]);

  // Atualiza o conteúdo externo no editor quando necessário
  useEffect(() => {
    const quill = quillRef.current;
    if (quill) {
      const delta = quill.clipboard.convert({ html: value });
      quill.setContents(delta, "silent"); // "silent" evita disparar eventos de mudança
    }
  }, [value]);
  

  return <div ref={editorRef} style={{ height: "300px", background: "white" }} />;
}
