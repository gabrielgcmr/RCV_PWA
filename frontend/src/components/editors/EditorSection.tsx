import SectionBase from "@/components/common/FormBase";
import MenuBar from "@/components/editors/MenuBar";
import editorStyleConfig from "@/components/editors/styleConfig";
import { EditorContent } from "@tiptap/react";
import { Editor } from "@tiptap/core";

interface EditorSectionProps {
  editor: Editor | null;
}

export default function EditorSection({ editor }: EditorSectionProps) {
  if (!editor) {
    return (
      <SectionBase title="Editor" icon="📝" id="editor" className="">
        <div>Editor carregando...</div>
      </SectionBase>
    );
  }

  return (
    <SectionBase title="Editor" icon="📝" id="editor" className="min-w-160">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={editorStyleConfig} />
    </SectionBase>
  );
}
