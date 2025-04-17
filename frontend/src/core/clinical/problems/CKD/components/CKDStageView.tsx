// src/core/clinical/CKD/CKDProblemView.tsx
import { useEffect } from "react";
import { usePatientStore } from "@/store";
import { setCKDProblem } from "../services/setCDKProblem";

function CKDProblemView() {
  const patient = usePatientStore((state) => state); // ou state.patient, se for slice
  const addProblem = usePatientStore((state) => state.addProblem);
  const getProblemByKey = usePatientStore((state) => state.getProblemByKey);

  const existingProblem = getProblemByKey("CKD");
  const newProblem = setCKDProblem(patient);

  // Adiciona a suspeita apenas uma vez
  useEffect(() => {
    if (!existingProblem && newProblem) {
      addProblem(newProblem);
    }
  }, [existingProblem, newProblem, addProblem]);

  // Mostra o diagnóstico, seja novo ou existente
  const displayProblem = existingProblem ?? newProblem;

  if (!displayProblem) return null;

  return (
    <li>
      <strong>{displayProblem.abbreviation}</strong>{" "}
      {displayProblem.description}
    </li>
  );
}

export default CKDProblemView;
