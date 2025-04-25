import SectionBase from "../../../common/SectionBase";
import { usePatientStore } from "@/store";
import { summaryTitle } from "../clinicalHistory/styles";

export default function PreventionsView() {
  const patient = usePatientStore((s) => s);
  const hasAnyPrevention = patient.preventions.length > 0;

  return (
    <SectionBase title="Prevenções" icon="✅" id="preventions" className="">
      <p className={summaryTitle}>
        ✅ <b>PREVENÇÕES</b>{" "}
      </p>
      {hasAnyPrevention ? (
        <ul className="list-disc pl-4">
          {patient.preventions.map((p) => (
            <li key={p.updatedAt}>
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
