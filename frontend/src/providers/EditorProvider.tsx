import { EditorProvider as TiptapEditorProvider } from "@tiptap/react";
import TiptapExtensions from "@/config/tiptap/EditorConfig";
import initialTextContentHTML from "@/constants/initialTextContentHTML";

interface Props {
  children: React.ReactNode;
}

export default function EditorProvider({ children }: Props) {
  return (
    <TiptapEditorProvider
      extensions={TiptapExtensions}
      content={initialTextContentHTML}
    >
      {children}
    </TiptapEditorProvider>
  );
}
