import { usePatient } from "../../../../hooks/usePatient";

export default function ExamDateForm() {
  const { patientData, updatePatientData } = usePatient();

  // Função para formatar a data no formato YYYY-MM-DD no horário local (Brasília - UTC-3)
  const formatDate = (date: Date | null | undefined): string => {
    if (!date) return ""; // Se a data for indefinida, retorna string vazia

    // Ajustando para o fuso horário local (Brasil)
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().split("T")[0]; // Formato YYYY-MM-DD
  };

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white">
      <label htmlFor="exam-date" className="block text-base font-bold mb-2">
        Data dos exames:
      </label>

      <input
        id="exam-date"
        type="date"
        value={formatDate(patientData.complementaryExams?.date)}
        onChange={(e) => {
          const selectedDate = e.target.value; // Já vem no formato "YYYY-MM-DD"
          if (selectedDate) {
            // Criar um objeto Date sem alteração de fuso horário
            const localDate = new Date(selectedDate + "T00:00:00"); // Garantindo meia-noite local
            updatePatientData("complementaryExams", { date: localDate });
          }
        }}
        className="w-full p-2 border rounded mb-2 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Data dos exames"
      />
    </div>
  );
}
