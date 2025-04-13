// src/components/common/form/SectionBase.tsx

import { useSectionStore } from "@/store/useSectionStore";

type SectionBaseProps = {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "compact" | "full";
};

export default function FormBase({
  id,
  title,
  icon,
  children,
  variant = "default",
  className = "",
}: SectionBaseProps) {
  const minimizedSections = useSectionStore((state) => state.minimizedSections);
  const minimize = useSectionStore((state) => state.minimize);
  const isMinimized = minimizedSections.some((section) => section.id === id);
  if (isMinimized) return null; // 👈 Se está minimizado, não renderiza

  const baseStyle =
    "bg-zinc-700 rounded-lg shadow text-white transition-all m-1";
  const variantStyle = {
    default: "p-3",
    compact: "p-1 text-sm",
    full: "p-4 md:col-span-2", // ocupa duas colunas se for necessário
  };

  return (
    <section className={`${baseStyle} ${variantStyle[variant]} ${className}`}>
      <div
        onClick={() => minimize({ id, title, icon })}
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
