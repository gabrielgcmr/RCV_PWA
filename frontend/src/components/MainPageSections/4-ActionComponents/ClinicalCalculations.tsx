import { useState } from "react";
import { useClinicalCalculations } from "../../../hooks/useClinicalCalculation";
import { ErrorPopup } from "../../common/ErrorPopup";


export default function ClinicalCalculations() {
  const { tfg, cvRisk, errors, calculateTFG, calculateRisk } = useClinicalCalculations();
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  // Verifica se há erros e mostra o modal
  const handleShowErrors = () => {
    if (errors.tfg?.length || errors.cvRisk?.length) {
      setIsErrorVisible(true);
    }
  };

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-48 flex flex-col gap-2">
      <h2 className="text-sm font-bold text-white mb-2">📊 Cálculos Clínicos</h2>

      <button
        onClick={() => { calculateTFG(); handleShowErrors(); }}
        className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Calcular TFG
      </button>

      <button
        onClick={() => { calculateRisk(); handleShowErrors(); }}
        className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Calcular RCV
      </button>

      {tfg && <p className="text-xs text-white mt-2"><strong>TFG:</strong> {tfg}</p>}
      {cvRisk && <p className="text-xs text-white mt-2"><strong>RCV:</strong> {cvRisk}</p>}

      {/* Modal de erro flutuante */}
      {isErrorVisible && (
        <ErrorPopup
          errors={[...(errors.tfg || []), ...(errors.cvRisk || [])]}
          onClose={() => setIsErrorVisible(false)}
        />
      )}
    </div>
  );
}
