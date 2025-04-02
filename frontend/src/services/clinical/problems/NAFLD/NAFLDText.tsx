// DHGNA
import usePatient from "../../../../hooks/usePatient";
import FIB4Index from "../../calculator/FIB4/FIB4Index";

function NAFLDText() {
  const { patient: patientData, hasProblem } = usePatient();
  const hasNAFLD = hasProblem("NAFLD");

  if (!hasNAFLD) return null;

  const { fib4, fib4category } = FIB4Index(patientData);

  if (!fib4) {
    return (
      <li>
        <strong>DHGNA</strong>
        <ul className="list-disc pl-6">
          <li>FIB4: Não avaliado!</li>
        </ul>
      </li>
    );
  }

  const isHighRisk = fib4category.startsWith("Alto risco");

  return (
    <li>
      <strong>DHGNA</strong>
      <ul className="list-disc pl-6">
        <li>
          FIB4: {fib4} pontos - {fib4category}
        </li>
        {isHighRisk && (
          <li>Recomendado avaliação com elastografia hepática.</li>
        )}
      </ul>
    </li>
  );
}

export default NAFLDText;
