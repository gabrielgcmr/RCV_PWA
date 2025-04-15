import { usePatientStore } from "@/store/patient/usePatientStore";

function ExamDateForm() {
  const { examDate, setExamDate } = usePatientStore();

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white">
      <label htmlFor="exam-date" className="block text-base font-bold mb-1">
        Data dos exames:
      </label>

      <input
        id="exam-date"
        type="date"
        value={examDate}
        onChange={(e) => setExamDate(e.target.value)}
        className="w-full p-1 border rounded mb-1 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default ExamDateForm;
