import { useSectionContext } from "../../../hooks/useSection";

type SectionBaseProps = {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
};

export default function SectionBase({
  id,
  title,
  icon,
  children,
}: SectionBaseProps) {
  const { minimizedSections, minimize } = useSectionContext();

  const isMinimized = minimizedSections.some((section) => section.id === id);

  if (isMinimized) return null; // 👈 Se está minimizada, não renderiza

  return (
    <section className="bg-zinc-700 rounded-lg p-3 shadow text-white mb-2 transition-all">
      <div
        onClick={() => {
          minimize({ id, title, icon });
        }}
        className="cursor-pointer flex justify-between items-center hover:bg-zinc-600 p-2 rounded transition"
      >
        <h3 className="text-lg font-bold flex items-center gap-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <span>{title}</span>
        </h3>
      </div>
      <div className="mt-2">{children}</div>
    </section>
  );
}
