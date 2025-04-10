// src/components/layout/MinimizedSectionBar.tsx

import { useSectionStore } from "@/store/useSectionStore";

export default function MinimizedSectionBar() {
  const minimizedSections = useSectionStore((state) => state.minimizedSections);
  const restore = useSectionStore((state) => state.restore);

  if (minimizedSections.length === 0) return null;

  return (
    <div className="rounded flex flex-col gap-1 text-white m-1">
      {minimizedSections.map((section) => (
        <button
          key={section.id}
          className="bg-zinc-600 hover:bg-zinc-500 p-2 rounded text-lg w-fit h-fit"
          onClick={() => restore(section.id)}
        >
          <span className="text-2xl">{section.icon}</span>
        </button>
      ))}
    </div>
  );
}
