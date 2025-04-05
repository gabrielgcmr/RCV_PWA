// MinimizedSectionBar.tsx

import { useSectionContext } from "../../../hooks/useSection";

export default function MinimizedSectionBar() {
  const { minimizedSections, restore } = useSectionContext();

  return (
    <div className="bg-zinc-800 rounded p-2 flex flex-col gap-2 text-white">
      {minimizedSections.map((section) => (
        <button
          key={section.id}
          className="bg-zinc-600 hover:bg-zinc-500 p-2 rounded text-left"
          onClick={() => restore(section.id)}
        >
          <span className="text-lg mr-2">{section.icon}</span>
          {section.title}
        </button>
      ))}
    </div>
  );
}
