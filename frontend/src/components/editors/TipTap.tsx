import { EditorContent, useEditor } from "@tiptap/react";
import SectionBase from "../common/form/SectionBase";
import clsx from "clsx";
import MenuBar from "./MenuBar";
import initialTextContentHTLM from "@/constants/initialTextContentHTML";
import TiptapExtensions from "@/config/tiptap/EditorConfig";

const tiptapClassName = clsx(
  "prose prose-invert max-w-none min-h-40 p-2 border mt-1",
  "bg-zinc-600 rounded-lg list-disc list-inside",
  "[&_ul]:list-disc [&_ul]:pl-5 [&_li]:ml-4",
  "[&_h1]:uppercase [&_h2]:uppercase [&_h3]:uppercase [&_h4]:uppercase",
  "[&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold"
);

const Tiptap = () => {
  const editor = useEditor({
    extensions: TiptapExtensions,
    content: initialTextContentHTLM,
  });

  if (!editor) return null;

  console.log("1", editor.getJSON());
  console.log(editor.view.state.doc.toJSON());

  return (
    <SectionBase title="Editor" icon="📝" id="editor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={tiptapClassName} />
    </SectionBase>
  );
};

export default Tiptap;
