import CKDIndex from "../../../../services/Problems/CKD/CKDIndex";
import DiabetesIndex from "../../../../services/Problems/Diabetes/DiabetesIndex";
import HypertensionIndex from "../../../../services/Problems/Hypertension/HypertensionIndex";
import NAFLDIndex from "../../../../services/Problems/NAFLD/NAFLD";
import TabagismIndex from "../../../../services/Problems/Tabagism/Tabagism";

export default function ProblemList() {
  return (
    <>
      <p className="text-base font-bold mb-2 mt-2">
        🟠<b>LISTA DE PROBLEMAS</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        <HypertensionIndex />
        <DiabetesIndex />
        <TabagismIndex />
        <CKDIndex />
        <NAFLDIndex />
      </ul>
    </>
  );
}
