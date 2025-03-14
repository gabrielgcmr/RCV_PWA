/**
 * Avalia o status da pressão arterial do paciente.
 * Retorna "Pressão Controlada" ou "Pressão Descontrolada" com base nos valores de PAS e PAD.
 * Critérios:
 * - Controlada: PAS < 140 mmHg e PAD < 90 mmHg
 * - Descontrolada: PAS ≥ 140 mmHg ou PAD ≥ 90 mmHg
 */
function HypertensionStatusChecker(SBP: number, DBP?: number): string {
  if (!SBP || SBP <= 0) {
    return "";
  }

  if (SBP < 140 && (DBP === undefined || DBP < 90)) {
    return " (controlada)";
  }

  return " (descontrolada)";
}

export default HypertensionStatusChecker;
