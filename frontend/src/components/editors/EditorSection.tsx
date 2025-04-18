import SectionBase from "@/components/common/SectionBase";
import MenuBar from "@/components/editors/MenuBar";
import editorStyleConfig from "@/components/editors/styleConfig";
import { EditorContent } from "@tiptap/react";
import { Editor } from "@tiptap/core";

interface EditorSectionProps {
  editor: Editor | null;
}

export default function EditorView({ editor }: EditorSectionProps) {
  if (!editor) {
    return (
      <SectionBase title="Editor" icon="📝" id="editor" className="h-full">
        <div>Editor carregando...</div>
      </SectionBase>
    );
  }

  return (
    <SectionBase title="Editor" icon="📝" id="editor" className="">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={editorStyleConfig} />
    </SectionBase>
  );
}
