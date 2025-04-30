import { usePatientStore } from "@/store";
import SectionBase from "../../common/SectionBase";
import { usePatientPreventions } from "@/hooks/usePatientPreventions";
import { useEffect } from "react";
import { useEgfrPrevention } from "@/core/clinical/Renal/preventions/useEgrfCalculation";

export default function PreventionsView() {
  const patient = usePatientStore((state) => state);
  const egfrPrevention = useEgfrPrevention(); // Gera a prevenção de eGFR

  // Hook existente para outras prevenções
  usePatientPreventions(patient);

  // Efeito para adicionar a prevenção de eGFR ao store
  useEffect(() => {
    if (
      egfrPrevention &&
      !patient.preventions.some((p) => p.id === egfrPrevention.id)
    ) {
      usePatientStore.getState().addPrevention(egfrPrevention);
    }
  }, [egfrPrevention, patient.preventions]);

  return (
    <SectionBase title="Prevenções" icon="✅" id="preventions" className="">
      <ul className="list-disc pl-4">
        {patient.preventions.map((p) => (
          <li key={p.id}>
            <strong>{p.abbreviation}</strong>: {p.description}
          </li>
        ))}
      </ul>
    </SectionBase>
  );
}
