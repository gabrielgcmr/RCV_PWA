import usePatient from "../../../../hooks/usePatient";

function DiabetesIndex() {
  const { patient: patientData, hasProblem } = usePatient();
  const hasDiabetes = hasProblem("diabetes");
  const fastingGlucose = Number(
    patientData.complementaryExams.exams.find(
      (exam) => exam.name === "fastingGlucose"
    )?.value ?? undefined
  );
  const hba1c = Number(
    patientData.complementaryExams.exams.find((exam) => exam.name === "hba1c")
      ?.value ?? undefined
  );
  // Pacientes sem diabetes
  if (!hasDiabetes) {
    if (hba1c !== undefined && hba1c !== 0) {
      if (hba1c < 5.6)
        return (
          <li>
            <strong>DM </strong> Ausente
          </li>
        );
      if (hba1c < 6.5)
        return (
          <li>
            <strong>DM </strong> Pré-diabetes
          </li>
        );
      if (hba1c >= 6.5)
        return (
          <li>
            <strong>DM </strong> Diabetes presente?
          </li>
        );
    }
    if (fastingGlucose !== undefined && fastingGlucose !== 0) {
      if (fastingGlucose < 100)
        return (
          <li>
            <strong>DM </strong> Ausente
          </li>
        );
      if (fastingGlucose < 126)
        return (
          <li>
            <strong>DM </strong> Pré-diabetes
          </li>
        );
      if (fastingGlucose >= 126)
        return (
          <li>
            <strong>DM </strong> Diabetes?
          </li>
        );
    }
  }

  // Pacientes com diabetes
  if (hasDiabetes) {
    if (hba1c !== undefined) {
      if (hba1c === 0)
        return (
          <li>
            <strong>DM </strong>
          </li>
        );
      if (hba1c < 7.0)
        return (
          <li>
            <strong>DM </strong> (controlado)
          </li>
        );
      if (hba1c >= 7)
        return (
          <li>
            <strong>DM </strong> (descontrolado)
          </li>
        );
      return (
        <li>
          <strong>DM </strong>
        </li>
      );
    }
  }
}

export default DiabetesIndex;
