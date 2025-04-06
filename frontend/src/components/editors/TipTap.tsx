import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import SectionBase from "../common/form/SectionBase";
import Strike from "@tiptap/extension-strike";
import Link from "@tiptap/extension-link";
import Italic from "@tiptap/extension-italic";
import { initialContent } from "./initialContent";
import clsx from "clsx";
import MenuBar from "./MenuBar";

const tiptapClassName = clsx(
  "prose prose-invert max-w-none min-h-40 p-2 border mt-1",
  "bg-zinc-600 rounded-lg list-disc list-inside",
  "[&_ul]:list-disc [&_ul]:pl-5 [&_li]:ml-4",
  "[&_h1]:uppercase [&_h2]:uppercase [&_h3]:uppercase [&_h4]:uppercase",
  "[&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold"
);

const extensions = [
  StarterKit,
  Document,
  Paragraph,
  Text,
  BulletList,
  ListItem,
  Bold,
  Italic,
  Heading,
  Strike,
  Link.configure({
    openOnClick: false,
  }),
  Highlight.configure({
    multicolor: true,
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content: initialContent,
  });

  if (!editor) return null;

  return (
    <SectionBase title="Editor" icon="📝" id="editor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={tiptapClassName} />
    </SectionBase>
  );
};

export default Tiptap;
