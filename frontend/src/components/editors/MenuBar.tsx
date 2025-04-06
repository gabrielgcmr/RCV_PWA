import {
  BoldIcon,
  ItalicIcon,
  ListBulletIcon,
  TrashIcon,
  Bars3BottomLeftIcon,
  NumberedListIcon,
  StrikethroughIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/20/solid";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor: any;
};

export default function MenuBar({ editor }: Props) {
  if (!editor) return null;

  const buttonClass = (isActive: boolean) =>
    `p-1 rounded transition hover:bg-gray-500 ${isActive ? "bg-blue-400" : ""}`;

  const iconClassName = 'h-4 w-4"';

  return (
    <div className="flex gap-2 border border-gray-300 p-1 shadow-sm bg-zinc-600">
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={buttonClass(false)}
        title="Desfazer (CTRL + Z)"
      >
        <ArrowUturnLeftIcon className={iconClassName} />
      </button>
      {/* Refazer */}
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={buttonClass(false)}
        title="Refazer (CTRL + SHIFT + Z)"
      >
        <ArrowUturnRightIcon className={iconClassName} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive("bold"))}
        title="Negrito (Ctrl + B)"
      >
        <BoldIcon className={iconClassName} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive("italic"))}
        title="Itálico (Ctrl + I)"
      >
        <ItalicIcon className={iconClassName} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={buttonClass(editor.isActive("strike"))}
        title="Tachado (Ctrl + D)"
      >
        <StrikethroughIcon className={iconClassName} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={buttonClass(editor.isActive("heading", { level: 2 }))}
        title="Título"
      >
        <Bars3BottomLeftIcon className={iconClassName} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClass(editor.isActive("bulletList"))}
        title="Lista com marcadores"
      >
        <ListBulletIcon className={iconClassName} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={buttonClass(editor.isActive("orderedList"))}
        title="Lista numerada"
      >
        <NumberedListIcon className={iconClassName} />
      </button>
      <button
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
        className="p-2 rounded hover:bg-red-100 text-red-300"
        title="Remover formatação"
      >
        <TrashIcon className={iconClassName} />
      </button>
    </div>
  );
}
