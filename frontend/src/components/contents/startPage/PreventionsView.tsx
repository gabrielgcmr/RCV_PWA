import SectionBase from "../../common/SectionBase";
import { usePatientStore } from "@/store";
import generatePreventions from "@/core/clinical/preventions/generatePreventions";

function PreventionsView() {
  const patient = usePatientStore((state) => state);
  //  Gere as prevenções automaticamente
  const preventions = generatePreventions(patient);

  return (
    <SectionBase title="Prevenções" icon="✅" id="preventions" className="">
      <ul className="list-disc pl-4">
        {preventions.map((p) => (
          <li key={p.name}>
            <strong>{p.abbreviation}</strong>: {p.description}
          </li>
        ))}
      </ul>
    </SectionBase>
  );
}

export default PreventionsView;
