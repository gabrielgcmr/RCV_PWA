import extensionsConfig from "@/config/tiptap/ExtensionConfig";
import {
  useEditor,
  EditorProvider as TipTapEditorProvider,
} from "@tiptap/react";
import { ReactNode } from "react";

export const EditorProvider = ({
  children,
  extensions = extensionsConfig,
  content = "",
}: {
  children: ReactNode;
  extensions?: any[];
  content?: string;
}) => {
  const editor = useEditor({
    extensions,
    content,
  });

  if (!editor) {
    return null;
  }

  return (
    <TipTapEditorProvider slotBefore={children} editor={editor}>
      {children}
    </TipTapEditorProvider>
  );
};
