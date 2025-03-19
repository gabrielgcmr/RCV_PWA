/**
 * Avalia o status do controle glicêmico do paciente.
 * Considera glicemia de jejum e HbA1c para determinar controle ou diagnóstico de diabetes.
 */
function DiabetesStatusChecker(hasDiabetes: boolean, fastingGlucose?: number, hba1c?: number): string {

  // 📌 Pacientes já diagnosticados com diabetes
  if (hasDiabetes) {
    if (hba1c !== undefined) {
      if (hba1c < 7.0) return " (controlada)";
      if (hba1c < 8.0) return " (Controle limítrofe)";
      return " (descontrolada)";
    }
    if (fastingGlucose !== undefined) {
      if (fastingGlucose < 100) return " (Normal)";
      if (fastingGlucose < 126) return " (Pré-diabetes)";
      return " (Glicemia descontrolada)";
    }
  }

  return "Dados insuficientes";
}

export default DiabetesStatusChecker;
