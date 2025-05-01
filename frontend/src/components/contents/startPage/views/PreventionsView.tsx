import { usePatientStore } from "@/store";
import { useEffect } from "react";
import SectionBase from "@/components/common/SectionBase";
import { useEgfrPrevention } from "@/core/clinical/Renal/preventions/useEgrfCalculation";
import { useShallow } from "zustand/react/shallow";

export default function PreventionsView() {
  const preventions = usePatientStore(useShallow((state) => state.preventions));
  const egfrPrevention = useEgfrPrevention();
  // Efeito para upsert da prevenção de eGFR
  useEffect(() => {
    if (egfrPrevention) {
      // Verifica se já existe uma prevenção com o mesmo valor/descrição
      const existing = usePatientStore
        .getState()
        .preventions.find(
          (p) =>
            p.abbreviation === "TFG" &&
            p.description === egfrPrevention.description
        );

      if (!existing) {
        usePatientStore.getState().upsertPrevention(egfrPrevention);
      }
    }
  }, [egfrPrevention]);

  return (
    <SectionBase title="Prevenções" icon="✅" id="preventions">
      <ul className="list-disc pl-4">
        {preventions.map((p) => (
          <li key={p.id}>
            <strong>{p.abbreviation}</strong>: {p.description}
          </li>
        ))}
      </ul>
    </SectionBase>
  );
}
