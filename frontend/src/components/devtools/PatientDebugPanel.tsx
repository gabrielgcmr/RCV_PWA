// src/components/devtools/PatientDebugPanel.tsx

import { usePatientStore } from "@/store";

export default function PatientDebugPanel() {
  const reset = usePatientStore((state) => state.resetPatient);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-zinc-800 text-white p-3 rounded-lg shadow-lg space-y-2">
      <h4 className="text-sm font-bold">🛠️ DevTools</h4>
      <button
        onClick={() => {
          console.log(
            "📦 Estado completo do paciente:",
            usePatientStore.getState()
          );
        }}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 text-sm rounded"
      >
        Log paciente
      </button>
      <button
        onClick={() => reset()}
        className="w-full bg-red-600 hover:bg-red-500 text-white px-2 py-1 text-sm rounded"
      >
        Resetar paciente
      </button>
    </div>
  );
}
