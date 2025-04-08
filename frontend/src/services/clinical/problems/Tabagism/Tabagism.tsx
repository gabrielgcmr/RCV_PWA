import { usePatient } from "@/hooks";

function TabagismIndex() {
  const { hasProblem } = usePatient();
  const hasTabagism = hasProblem("tabagism");
  if (!hasTabagism) return null;
  if (hasTabagism)
    return (
      <li>
        <strong>Tabagismo</strong>{" "}
      </li>
    );
}

export default TabagismIndex;
