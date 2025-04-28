import SectionBase from "../../../common/SectionBase";
import { usePatientStore } from "@/store";
import { summaryTitle } from "../clinicalHistory/styles";
import { useEffect } from "react";
import { buildEgfrPrevention } from "@/core/clinical/Renal/preventions/buildEgfrPrevention";

export default function PreventionsView() {
  const patient = usePatientStore((s) => s);
  const addPrevention = usePatientStore((s) => s.addPrevention);
  const hasAnyPrevention = patient.preventions.length > 0;

  // toda vez que mudar o array de exames, recalcula e adiciona a prevenção
  useEffect(() => {
    // só roda se já existir creatinina no array
    if (patient.exams.some((e) => e.key === "creatinine")) {
      const prev = buildEgfrPrevention(patient);
      addPrevention(prev);
    }
  }, [patient.exams, addPrevention, patient]);

  return (
    <SectionBase title="Prevenções" icon="✅" id="preventions" className="">
      <p className={summaryTitle}>
        ✅ <b>PREVENÇÕES</b>{" "}
      </p>
      {hasAnyPrevention ? (
        <ul className="list-disc pl-4">
          {patient.preventions.map((p) => (
            <li key={p.id}>
              <strong>{p.abbreviation}</strong>: {p.description}
            </li>
          ))}
        </ul>
      ) : (
        <li>Sem prevenções</li>
      )}
    </SectionBase>
  );
}
