import { usePatientStore } from "@/store/patient";
import { summaryTitle } from "./styles";

export default function IdentificationSection() {
  const { identification } = usePatientStore();

  return (
    <section id="identification-section">
      <p className={summaryTitle}>
        📋<b>IDENTIFICAÇÃO</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        <li>Nome: {identification.fullName}</li>
        <li>Idade: {identification.age}</li>
        <li>Sexo:{identification.gender} </li>
        <li>Raça: {identification.race}</li>
      </ul>
    </section>
  );
}
