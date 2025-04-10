import SectionBase from "@/components/common/SectionBase";
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
      <SectionBase
        title="Editor"
        icon="📝"
        id="editor"
        className="max-h-180 max-w-150 overflow-y-auto"
      >
        <div>Editor carregando...</div>
      </SectionBase>
    );
  }

  return (
    <SectionBase
      title="Editor"
      icon="📝"
      id="editor"
      className="max-h-180 max-w-120 overflow-y-auto"
    >
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={editorStyleConfig} />
    </SectionBase>
  );
}
