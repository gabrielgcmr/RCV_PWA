import { usePatient } from "../../../../hooks/usePatient";

export default function ExamDateForm() {
  const { patientData, updatePatientData } = usePatient();
  const examDate = patientData?.complementaryExams?.date;

  const formattedDate = examDate
    ? new Date(
        examDate.getTime() - examDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0]
    : "";

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white">
      <label htmlFor="exam-date" className="block text-base font-bold mb-2">
        Data dos exames:
      </label>

      <input
        id="exam-date"
        type="date"
        value={formattedDate}
        onChange={(e) => {
          const selectedDate = e.target.valueAsDate;
          if (selectedDate) {
            const adjustedDate = new Date(
              Date.UTC(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate()
              )
            );
            updatePatientData("complementaryExams", { date: adjustedDate });
          }
        }}
        className="w-full p-2 border rounded mb-2 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
