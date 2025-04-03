// components/common/form/FormBase.tsx
type FormBaseProps = {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
};

export default function FormBase({
  title,
  icon,
  children,
  className = "",
}: FormBaseProps) {
  return (
    <section
      className={`p-4 bg-zinc-700 rounded-lg shadow-md text-white mb-2 ${className}`}
    >
      <h2 className="text-lg font-bold mb-1">
        {icon && <span className="mr-1">{icon}</span>}
        {title}
      </h2>
      {children}
    </section>
  );
}
