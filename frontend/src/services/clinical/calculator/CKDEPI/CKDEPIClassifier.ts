
export default function classifyTFG(eGFR: number): string {
    if (eGFR >= 90) return "Normal";
    if (eGFR >= 60) return "Leve redução";
    if (eGFR >= 30) return "Redução moderada";
    if (eGFR >= 15) return "Redução severa";
    return "Falência renal";
  }
  