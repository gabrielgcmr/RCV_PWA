// DHGNA
import usePatient from "../../../../hooks/usePatient";
import FIB4Index from "../../calculator/FIB4/FIB4Index";

function NAFLDText() {
  const { patient: patientData, hasProblem } = usePatient();
  const hasNAFLD = hasProblem("NAFLD");

  if (!hasNAFLD) return null;

  const { value, classification } = FIB4Index(patientData);

  if (!value) {
    return (
      <li>
        <strong>DHGNA</strong>
        <ul className="list-disc pl-6">
          <li>FIB4: Não avaliado!</li>
        </ul>
      </li>
    );
  }

  const isHighRisk = classification.startsWith("Alto risco");

  return (
    <li>
      <strong>DHGNA</strong>
      <ul className="list-disc pl-6">
        <li>
          FIB4: {value} pontos - {classification}
        </li>
        {isHighRisk && (
          <li>Recomendado avaliação com elastografia hepática.</li>
        )}
      </ul>
    </li>
  );
}

export default NAFLDText;
