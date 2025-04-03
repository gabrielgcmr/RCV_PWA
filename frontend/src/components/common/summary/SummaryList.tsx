interface SummaryListProps {
  items: string[];
}

export default function SummaryList({ items }: SummaryListProps) {
  if (items.length === 0) return <p>Sem informações disponíveis.</p>;

  return (
    <ul className="list-disc pl-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
