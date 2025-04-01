import CKDIndex from "../../../../services/clinical/problems/CKD/CKDIndex";
import DiabetesIndex from "../../../../services/clinical/problems/Diabetes/DiabetesIndex";
import HypertensionIndex from "../../../../services/clinical/problems/Hypertension/HypertensionIndex";
import NAFLDText from "../../../../services/clinical/problems/NAFLD/NAFLDText";
import TabagismIndex from "../../../../services/clinical/problems/Tabagism/Tabagism";
import { summaryTitle } from "./styles";

export default function ProblemList() {
  return (
    <>
      <p className={summaryTitle}>
        🟠<b>LISTA DE PROBLEMAS</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        <HypertensionIndex />
        <DiabetesIndex />
        <TabagismIndex />
        <CKDIndex />
        <NAFLDText />
      </ul>
    </>
  );
}
