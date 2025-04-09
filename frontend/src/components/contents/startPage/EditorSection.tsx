import SectionBase from "@/components/common/form/SectionBase";
import MenuBar from "@/components/editors/MenuBar";
import editorStyleConfig from "@/config/tiptap/styleConfig";
import { EditorContent, useCurrentEditor } from "@tiptap/react";

export default function EditorSection() {
  const editor = useCurrentEditor();

  return (
    <SectionBase title="Editor" icon="📝" id="editor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={editorStyleConfig} />
    </SectionBase>
  );
}
