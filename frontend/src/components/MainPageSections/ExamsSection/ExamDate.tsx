import { usePatient } from "../../../hooks/usePatient";

export default function ExamDateForm() {
  const { patientData, handleFieldChange } = usePatient();

  // 🔹 Função para formatar a data no formato YYYY-MM-DD (usado pelo input date)
  const formatDate = (date?: Date): string => {
    if (!date || isNaN(date.getTime())) return "";
    return date.toISOString().split("T")[0]; // Mantém o formato YYYY-MM-DD
  };

  // 🔹 Função para converter a string YYYY-MM-DD em um objeto Date correto
  const parseDateInput = (dateString: string): Date | null => {
    return dateString ? new Date(`${dateString}T00:00:00`) : null;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (selectedDate) {
      const parsedDate = parseDateInput(selectedDate);
      if (parsedDate) {
        handleFieldChange("complementaryExams", "date", parsedDate.toISOString());
      }
    }
  };

  return (
    <div className="p-2 bg-zinc-600 rounded-lg shadow-md text-white col-span-1">
      <label htmlFor="exam-date" className="text-sm mb-1 block">
        Data dos exames
      </label>

      <input
        type="date"
        value={formatDate(patientData.complementaryExams?.date)}
        onChange={handleDateChange}
        className="w-full p-1 text-sm border rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Data dos exames"
      />
    </div>
  );
}
