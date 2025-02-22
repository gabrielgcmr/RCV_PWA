import { usePatient } from "../../../hooks/usePatient";
import { ExamInput } from "../ExamInput/ExamInput";
import { IExamInputProps } from "../ExamInput/IExamInputProps";


export interface IExamFormProps {
  title?: string;
  exams: IExamInputProps[];
}

export default function ExamProfileForm({ title = "Exame", exams }: IExamFormProps) {
  const { handleExamChange, getExamValue } = usePatient();

  return (
    <div className="p-2 bg-zinc-600 rounded-lg shadow-md text-white flex-shrink-0 min-w-[100px] max-w-[200px]">
      <h2 className="text-lg font-bold mb-2">{title}</h2>

      {/* Renderização dinâmica dos exames */}
      {exams.map((exam) => (
        <ExamInput
          key={exam.name}
          {...exam} // Passa automaticamente todas as propriedades do objeto exam
          value={getExamValue(exam.name) || ""}
          onChange={handleExamChange}
        />
      ))}
    </div>
  );
}
