// MinimizedSectionBar.tsx

import { useSectionContext } from "../../hooks/useSection";

export default function MinimizedSectionBar() {
  const { minimizedSections, restore } = useSectionContext();

  if (minimizedSections.length === 0) return null;

  return (
    <div className=" rounded p-2 flex flex-col gap-2 text-white">
      {minimizedSections.map((section) => (
        <button
          key={section.id}
          className="bg-zinc-600 hover:bg-zinc-500 p-2 rounded text-lg w-fit h-fit"
          onClick={() => restore(section.id)}
        >
          <span className="text-3xl mr-2">{section.icon}</span>
        </button>
      ))}
    </div>
  );
}
