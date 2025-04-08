import { usePatient } from "@/hooks";

function DebugPatient() {
  const { patient } = usePatient();

  console.log("🔍 patient =", patient); // 👈 Veja a estrutura completa

  return null; // componente invisível só para debug
}
 export default DebugPatient;