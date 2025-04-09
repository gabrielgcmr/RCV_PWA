import { useSectionContext } from "../../hooks/useSection";

export default function MinimizedSectionsBar() {
  const { minimizedSections, restore } = useSectionContext();

  if (minimizedSections.length === 0) return null;

  return (
    <div className="flex gap-2 mb-4">
      {minimizedSections.map((section) => (
        <button
          key={section.id}
          onClick={() => restore(section.id)}
          className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-lg text-xl"
        >
          {section.icon}
        </button>
      ))}
    </div>
  );
}
