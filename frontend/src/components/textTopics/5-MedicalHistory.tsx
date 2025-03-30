export default function MedicalHistory() {
  return (
    <>
      <p className="text-base font-bold mb-2 mt-2">
        🟡 <b>ANTECEDENTES</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        <li>
          Hábitos de Vida
          <ul className="list-disc pl-6">
            <li>NA</li>
          </ul>
        </li>
      </ul>
      <ul className="list-disc pl-4">
        <li>
          Ant. Patológicos
          <ul className="list-disc pl-6">
            <li>NA</li>
          </ul>
        </li>
      </ul>
      <ul className="list-disc pl-4">
        <li>
          Ant. Familiares
          <ul className="list-disc pl-6">
            <li>NA</li>
          </ul>
        </li>
      </ul>
    </>
  );
}
