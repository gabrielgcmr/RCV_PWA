import { usePatientStore } from "@/store";
import SectionBase from "../../common/SectionBase";
import { usePatientPreventions } from "@/hooks/usePatientPreventions";

export default function PreventionsView() {
  const patient = usePatientStore((state) => state);
  usePatientPreventions(patient);

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
