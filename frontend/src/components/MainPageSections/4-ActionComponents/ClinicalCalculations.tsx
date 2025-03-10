import { useState } from "react";
import { calculateCKDEPIIndex } from "../../../services/ClinicalCalculations/CKD-EPI/CKDEPIIndex";
import { calculateCVRIndex } from "../../../services/ClinicalCalculations/CVR/CVRIndex";
import { calculateFIB4Index } from "../../../services/ClinicalCalculations/FIB-4/FIB4Index";
import { usePatient } from "../../../hooks/usePatient";
import { ErrorPopup } from "../../common/ErrorPopup";
import { PatientData } from "../../../interfaces/Interfaces";

export default function ClinicalCalculations() {
  const { patientData } = usePatient();
  const [errors, setErrors] = useState<{ TFG?: string[]; RCV?: string[]; FIB4?: string[] }>({});
  const [visibleError, setVisibleError] = useState<"TFG" | "RCV" | "FIB4" | null>(null);

  const runCalculation = (label: "TFG" | "RCV" | "FIB4", calculateFn: (data: PatientData) => { errors: string[] }) => {
    const result = calculateFn(patientData);
    if (result.errors.length > 0) {
      setErrors((prev) => ({ ...prev, [label]: result.errors }));
      setVisibleError(label);
    }
  };

  const buttons: { label: "TFG" | "RCV" | "FIB4"; color: string; action: () => void }[] = [
    { label: "TFG", color: "bg-blue-500", action: () => runCalculation("TFG", calculateCKDEPIIndex) },
    { label: "RCV", color: "bg-green-500", action: () => runCalculation("RCV", calculateCVRIndex) },
    { label: "FIB4", color: "bg-yellow-500", action: () => runCalculation("FIB4", calculateFIB4Index) },
  ];

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-48 flex flex-col gap-2">
      <h2 className="text-sm font-bold text-white mb-2">📊 Cálculos Clínicos</h2>

      {/* Botões de Cálculo */}
      {buttons.map(({ label, color, action }) => (
        <div key={label}>
          <button
            onClick={action}
            className={`px-1 py-1 text-xs ${color} text-white rounded hover:brightness-110 transition`}
          >
            {label}
          </button>

          {(errors[label] || []).length > 0 && (
            <p className="text-xs text-red-400 mt-1">
              ⚠️ Erro em {label} - Ver detalhes
            </p>
          )}
        </div>
      ))}

      {/* Modal de erro flutuante */}
      {visibleError && errors[visibleError] && (
        <ErrorPopup errors={errors[visibleError] || []} onClose={() => setVisibleError(null)} />
      )}
    </div>
  );
}
