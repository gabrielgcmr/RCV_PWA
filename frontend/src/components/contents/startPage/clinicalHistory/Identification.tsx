import { summaryTitle } from "./styles";
import { Identification } from "@/types";

export default function generateIdentificationHTML(
  identification: Identification
) {
  return (
    <section id="identification-section">
      <p className={summaryTitle}>
        📋<b>IDENTIFICAÇÃO</b>
      </p>
      <ul className="list-disc pl-4">
        <li>
          <strong>Nome:</strong> {identification.fullName}
        </li>
        <li>
          <strong>Idade:</strong> {identification.age}
        </li>
        <li>
          <strong>Gênero:</strong>
          {identification.gender}{" "}
        </li>
        <li>
          <strong>Raça:</strong> {identification.race}
        </li>
      </ul>
    </section>
  );
}
