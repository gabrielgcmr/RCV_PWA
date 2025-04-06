import { summaryTitle } from "./styles";

export default function PresentIllness() {
  return (
    <>
      <p className={summaryTitle}>
        🔍 <b>DOENÇA ATUAL</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        <li>HDA</li>
        <ul className="list-disc pl-6">
          <li>Paciente refere</li>
        </ul>
        <li>EF</li>
        <ul className="list-disc pl-6">
          <li>BEG...</li>
        </ul>
        <li>HD</li>
        <ul className="list-disc pl-6">
          <li>?</li>
        </ul>
        <li>CD</li>
        <ul className="list-disc pl-6">
          <li>?</li>
        </ul>
      </ul>
    </>
  );
}
