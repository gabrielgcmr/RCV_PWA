import { EditorContent, useEditor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import BulletList from "@tiptap/extension-bullet-list";
import Text from "@tiptap/extension-text";
import { Bold, Italic, List, ListOrdered } from "lucide-react";
import SectionBase from "../common/form/SectionBase";

const extensions = [
  StarterKit,
  Document,
  Paragraph,
  Text,
  BulletList,
  ListItem,
  Heading.configure({
    levels: [1, 2, 3],
  }),
];

const content = "<p>Hello World!</p>";

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  if (!editor) return null;

  return (
    <SectionBase title="Editor" icon="📝">
      <div className="flex gap-4 border-b pb-2 m-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "text-blue-300" : ""}
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "text-blue-300" : ""}
        >
          <Italic size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "text-blue-300" : ""}
        >
          <List size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "text-blue-300" : ""}
        >
          <ListOrdered size={18} />
        </button>
      </div>

      <EditorContent
        editor={editor}
        className="min-h-[120px] border p-2 rounded"
      />

      <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        className="bg-white border shadow px-2 py-1 rounded"
      >
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "text-blue-600" : ""}
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "text-blue-600" : ""}
        >
          <Italic size={18} />
        </button>
      </BubbleMenu>
    </SectionBase>
  );
};

export default Tiptap;
