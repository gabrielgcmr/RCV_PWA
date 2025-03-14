/**
 * Avalia o status da pressão arterial do paciente.
 * Retorna "Pressão Controlada" ou "Pressão Descontrolada" com base nos valores de PAS e PAD.
 * Critérios:
 * - Controlada: PAS < 140 mmHg e PAD < 90 mmHg
 * - Descontrolada: PAS ≥ 140 mmHg ou PAD ≥ 90 mmHg
 */
function hypertensionStatusChecker(SBP: number, DBP?: number): string {
  if (SBP >= 140 || (DBP !== undefined && DBP >= 90)) {
    return "Pressão Descontrolada";
  }
  return "Pressão Controlada";
}

export default hypertensionStatusChecker;