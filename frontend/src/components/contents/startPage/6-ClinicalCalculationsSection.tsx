import { useState } from "react";

import { ErrorPopup } from "../../ui/ErrorPopup";
import CKDEPIIndex from "../../../services/clinical/calculator/CKDEPI/CKDEPIIndex";
import CVRIndex from "../../../services/clinical/calculator/CVR/CVRIndex";
import FIB4Index from "../../../services/clinical/calculator/FIB4/FIB4Index";
import { ClinicalPatientData, Prevention } from "../../../interfaces";
import { usePatient } from "@/hooks";

function ClinicalCalculations() {
  const { patient } = usePatient();

  const [preventionResults, setPreventionResults] = useState<{
    TFG?: Prevention;
    RCV?: Prevention;
    FIB4?: Prevention;
  }>({});

  const [visibleError, setVisibleError] = useState<
    "TFG" | "RCV" | "FIB4" | null
  >(null);

  const runCalculation = (
    label: "TFG" | "RCV" | "FIB4",
    calculateFn: (data: ClinicalPatientData) => Prevention
  ) => {
    const result = calculateFn(patient);

    result.errors = result.errors ?? [];

    setPreventionResults((prev) => ({ ...prev, [label]: result }));

    if (result.errors.length > 0) {
      setVisibleError(label);
    }
  };

  const buttons: {
    label: "TFG" | "RCV" | "FIB4";
    color: string;
    action: () => void;
  }[] = [
    {
      label: "TFG",
      color: "bg-blue-500",
      action: () => runCalculation("TFG", CKDEPIIndex),
    },
    {
      label: "RCV",
      color: "bg-green-500",
      action: () => runCalculation("RCV", CVRIndex),
    },
    {
      label: "FIB4",
      color: "bg-yellow-500",
      action: () => runCalculation("FIB4", FIB4Index),
    },
  ];

  return (
    <div className="p-2 bg-zinc-700 rounded-lg shadow-md w-12 flex flex-col gap-2 mb-2">
      {/* Botões de Cálculo */}
      {buttons.map(({ label, color, action }) => (
        <div key={label}>
          <button
            onClick={action}
            className={`px-1 py-1 text-xs ${color} text-white rounded hover:brightness-110 transition`}
          >
            {label}
          </button>

          {(preventionResults[label]?.errors?.length ?? 0) > 0 && (
            <p className="text-xs text-red-400 mt-1">
              ⚠️ Erro em {label} - Ver detalhes
            </p>
          )}
        </div>
      ))}

      {/* Modal de erro flutuante */}
      {visibleError &&
        (preventionResults[visibleError]?.errors?.length ?? 0) > 0 && (
          <ErrorPopup
            errors={preventionResults[visibleError]?.errors || []}
            onClose={() => setVisibleError(null)}
          />
        )}
    </div>
  );
}

export default ClinicalCalculations;
