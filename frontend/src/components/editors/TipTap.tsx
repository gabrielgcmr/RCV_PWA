import "./styles.css";
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
import { content } from "./Content";
import MenuBar from "./ToolBar";

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
    content,
  });

  if (!editor) return null;

  return (
    <SectionBase title="Editor" icon="📝">
      <div className="flex gap-4 border-2 p-2 m-1">
        <MenuBar editor={editor} />
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          Code
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          Ordered list
        </button>
      </div>

      <EditorContent
        editor={editor}
        className=" tiptap min-h-40 border p-2 m-1 rounded"
      />
    </SectionBase>
  );
};

export default Tiptap;
