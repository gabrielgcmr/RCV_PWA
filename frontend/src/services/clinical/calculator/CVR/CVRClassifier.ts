/**
   * Classifica o risco cardiovascular em categorias.
   */
export function classifyCVR (riskScore: number): string{
  if (riskScore < 5) return "Baixo risco";
  if (riskScore < 7.5) return "Risco limítrofe";
  if (riskScore < 20) return "Risco intermediário";
  return "Alto risco";
};
