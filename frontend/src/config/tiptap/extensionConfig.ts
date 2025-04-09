//config/editor/EditorConfig.tsx
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Strike from "@tiptap/extension-strike";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import HardBreak from "@tiptap/extension-hard-break";
import OrderedList from "@tiptap/extension-ordered-list";
import History from "@tiptap/extension-history";
import Blockquote from "@tiptap/extension-blockquote";
import Underline from "@tiptap/extension-underline";

const extensionsConfig = [
    Document,
    Paragraph.extend({
      addAttributes() {
        return {
          ...this.parent?.(),
          id: {
            default: null,
            parseHTML: (element) => element.getAttribute("id"),
            renderHTML: (attributes) => {
              return {
                ...(attributes.id ? { id: attributes.id } : {}),
              };
            },
          },
        };
      },
    }),
    Text,
    HardBreak,
    BulletList,
    ListItem,
    OrderedList,
    History,
    Blockquote,
    Underline,
    Bold,
    Italic,
    Heading,
    Strike,
    Link.configure({ openOnClick: false }),
    Highlight.configure({ multicolor: true }),
    TextAlign.configure({ types: ["heading", "paragraph"] }),
  ];

  export default extensionsConfig;