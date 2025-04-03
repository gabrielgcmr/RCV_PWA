import { summaryTitle } from "./styles";

// src/textTopics/Allergies.tsx
export default function Allergies() {
  return (
    <>
      <p className={summaryTitle}>
        🔴 <b>ALERGIAS</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        <li>Nenhuma</li>
      </ul>
    </>
  );
}
