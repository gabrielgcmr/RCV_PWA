import usePatient from "../../../hooks/usePatient";

function ExamDateForm() {
  const { patient, updatePatient } = usePatient();

  // Função para formatar a data no formato YYYY-MM-DD no horário local (Brasília - UTC-3)
  const formatDate = (date: Date | null | undefined): string => {
    if (!date || isNaN(date.getTime())) return ""; // Check for invalid Date
    // Adjusting for local timezone (Brazil)
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    return localDate.toISOString().split("T")[0]; // Format YYYY-MM-DD
  };

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white">
      <label htmlFor="exam-date" className="block text-base font-bold mb-1">
        Data dos exames:
      </label>

      <input
        id="exam-date"
        type="date"
        value={formatDate(patient.complementaryExams?.date)}
        onChange={(e) => {
          const selectedDate = e.target.value; // Já vem no formato "YYYY-MM-DD"
          if (selectedDate) {
            updatePatient("complementaryExams", {
              date: new Date(selectedDate + "T00:00:00"),
            });
          } else {
            updatePatient("complementaryExams", { date: null }); // Define explicitamente como "sem data"
          }
        }}
        className="w-full p-1 border rounded mb-1 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Data dos exames"
      />
    </div>
  );
}

export default ExamDateForm;
