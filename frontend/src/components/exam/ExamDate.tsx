import usePatient from "../../hooks/usePatient";

function ExamDateForm() {
  const { patientData, updateExamDate } = usePatient();

  const formatDate = (date: Date | null | undefined): string => {
    if (!date || isNaN(date.getTime())) return "";
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().split("T")[0];
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (selectedDate) {
      updateExamDate(new Date(selectedDate + "T00:00:00"));
    } else {
      updateExamDate(null);
    }
  };

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white">
      <label htmlFor="exam-date" className="block text-base font-bold mb-1">
        Data dos exames:
      </label>

      <input
        id="exam-date"
        type="date"
        value={formatDate(patientData.complementaryExams?.date)}
        onChange={handleDateChange}
        className="w-full p-1 border rounded mb-1 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Data dos exames"
      />
    </div>
  );
}

export default ExamDateForm;
