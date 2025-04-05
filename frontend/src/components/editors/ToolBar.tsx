import {
  BoldIcon,
  ItalicIcon,
  ListBulletIcon,
  TrashIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor: any;
};

export default function MenuBar({ editor }: Props) {
  if (!editor) return null;

  const buttonClass = (isActive: boolean) =>
    `p-2 rounded transition hover:bg-gray-200 ${isActive ? "bg-gray-300" : ""}`;

  return (
    <div className="flex gap-2 border border-gray-300 p-2 rounded-md shadow-sm bg-gray-700">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive("bold"))}
        title="Negrito"
      >
        <BoldIcon className="h-5 w-5" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive("italic"))}
        title="Itálico"
      >
        <ItalicIcon className="h-5 w-5" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={buttonClass(editor.isActive("heading", { level: 2 }))}
        title="Título"
      >
        <Bars3BottomLeftIcon className="h-5 w-5" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClass(editor.isActive("bulletList"))}
        title="Lista com marcadores"
      >
        <ListBulletIcon className="h-5 w-5" />
      </button>

      <button
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
        className="p-2 rounded hover:bg-red-100 text-red-600"
        title="Remover formatação"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
