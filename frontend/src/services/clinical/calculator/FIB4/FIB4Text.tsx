import usePatient from "../../../../hooks/usePatient";
import FIB4Index from "../../../../services/clinical/calculator/FIB4/FIB4Index";

export default function FIB4Text() {
  const { patient } = usePatient(); // Desestruturação para acessar corretamente
  const fib4 = FIB4Index(patient);

  if (!fib4.value) return null;

  return (
    <>
      <li>
        <strong>{fib4.abreviation} </strong>: {fib4.value} {fib4.unit} —{" "}
        {fib4.classification}
      </li>
    </>
  );
}
