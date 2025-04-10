import { usePatient } from "@/hooks";
import { useEffect } from "react";
import { summaryTitle } from "./styles";

export default function Preventions() {
  const { patient, refreshPreventions } = usePatient();

  useEffect(() => {
    refreshPreventions();
  }, [patient.exams, patient.identification]);

  return (
    <>
      <p className={summaryTitle}>
        {" "}
        ✅<b>PREVENÇÕES</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        {patient.preventions.length === 0 ? (
          <li>Nenhuma prevenção disponível</li>
        ) : (
          patient.preventions.map((p) => (
            <li key={p.name}>
              <strong>{p.abbreviation}</strong>: {p.description}
            </li>
          ))
        )}
      </ul>
    </>
  );
}
