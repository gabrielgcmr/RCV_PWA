import { useClinicalCalculations } from "../../../hooks/useClinicalCalculation";
import { ErrorPopup } from "../../common/ErrorPopup";
import { useState } from "react";

export default function ClinicalCalculations() {
  const { errors, calculateTFG, calculateRCV, calculateFIB4 } = useClinicalCalculations();
  const [visibleError, setVisibleError] = useState<"TFG" | "RCV" | "FIB4" | null>(null);

  const buttons: { label: "TFG" | "RCV" | "FIB4"; color: string; action: () => void }[] = [
    { label: "TFG", color: "bg-blue-500", action: calculateTFG },
    { label: "RCV", color: "bg-green-500", action: calculateRCV },
    { label: "FIB4", color: "bg-yellow-500", action: calculateFIB4 },
  ];
  
  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-48 flex flex-col gap-2">
      <h2 className="text-sm font-bold text-white mb-2">📊 Cálculos Clínicos</h2>

      {/* Botões de Cálculo */}
      {buttons.map(({ label, color, action }) => (
        <div key={label}>
          <button
            onClick={() => {
              action();
              if (errors[label]?.length) {
                setVisibleError(label);
              }
            }}
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

      {/* Modal de erro flutuante (somente para o cálculo que gerou erro) */}
      {visibleError && errors[visibleError] && (
        <ErrorPopup errors={errors[visibleError] || []} onClose={() => setVisibleError(null)} />
      )}
    </div>
  );
}
