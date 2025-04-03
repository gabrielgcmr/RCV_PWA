import SectionBase from "../form/SectionBase";

// components/common/exam/ExamsLayout.tsx
type ExamsLayoutProps = {
  dateComponent: React.ReactNode;
  actionComponent: React.ReactNode;
  examComponents: React.ReactNode[];
};

export default function ExamsLayout({
  dateComponent,
  actionComponent,
  examComponents,
}: ExamsLayoutProps) {
  return (
    <SectionBase title="Exames Complementares" icon="🧪" className="p-2">
      <div className="grid grid-cols-4 grid-rows-1 gap-4 mb-1">
        <div className="col-span-2">{dateComponent}</div>
        <div className="bg-zinc-500 col-span-2 p-3 rounded-lg">
          {actionComponent}
        </div>
      </div>
      <div className="flex flex-wrap gap-1">{examComponents}</div>
    </SectionBase>
  );
}
