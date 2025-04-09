import SectionBase from "@/components/common/form/SectionBase";
import MenuBar from "@/components/editors/MenuBar";
import editorStyleConfig from "@/config/tiptap/styleConfig";
import { EditorContent } from "@tiptap/react";
import { Editor } from "@tiptap/core";

interface EditorSectionProps {
  editor: Editor | null;
}

export default function EditorSection({ editor }: EditorSectionProps) {
  if (!editor) {
    return (
      <SectionBase title="Editor" icon="📝" id="editor">
        <div>Editor carregando...</div>
      </SectionBase>
    );
  }

  return (
    <SectionBase title="Editor" icon="📝" id="editor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={editorStyleConfig} />
    </SectionBase>
  );
}
