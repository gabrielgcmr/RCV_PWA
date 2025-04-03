import usePatient from "../../../../hooks/usePatient";
import CKDIndex from "../../../../services/clinical/problems/CKD/CKDIndex";
import DiabetesIndex from "../../../../services/clinical/problems/Diabetes/DiabetesIndex";
import HypertensionText from "../../../../services/clinical/problems/Hypertension/HypertensionIndex";
import NAFLDText from "../../../../services/clinical/problems/NAFLD/NAFLDText";
import TabagismIndex from "../../../../services/clinical/problems/Tabagism/Tabagism";
import { summaryTitle } from "./styles";

export default function ProblemList() {
  const { patient } = usePatient();
  const hasAnyProblem = patient.problemList.problems.length > 0;

  return (
    <>
      <p className={summaryTitle}>
        🟠<b>LISTA DE PROBLEMAS</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        {hasAnyProblem ? (
          <>
            <HypertensionText />
            <DiabetesIndex />
            <TabagismIndex />
            <CKDIndex />
            <NAFLDText />
          </>
        ) : (
          <li>Sem problemas</li>
        )}
      </ul>
    </>
  );
}
