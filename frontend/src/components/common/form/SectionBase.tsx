// components/common/form/FormBase.tsx
type SectionBaseProps = {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionBase({
  title,
  icon,
  children,
  className = "",
}: SectionBaseProps) {
  return (
    <section
      className={`p-2.5 bg-zinc-700 rounded-lg shadow-md text-white mb-1 ${className}`}
    >
      <h3 className="text-lg font-bold mb-1 text-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
      {children}
    </section>
  );
}
