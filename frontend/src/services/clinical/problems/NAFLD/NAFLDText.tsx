// DHGNA
import usePatient from "../../../../hooks/usePatient";
import calculateFIB4Index from "../../calculator/FIB-4/FIB4Index";

function NAFLDText() {
  const { patientData, hasProblem } = usePatient();
  const hasNAFLD = hasProblem("NAFLD");

  if (!hasNAFLD) return null;

  const { fib4, fib4category } = calculateFIB4Index(patientData);

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
