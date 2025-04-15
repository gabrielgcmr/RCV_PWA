import { usePatientStore } from "@/store/patient";
import { mostCommonExams } from "@/constants";
import { ExamInput } from "./ExamInput";
import { ExamSelectInput } from "./ExamSelectInput";
import { useExamSectionStore } from "@/store/useExamSectionStore";
import { useCallback } from "react";

interface CategoryExamFormProps {
  title: string;
  category: string;
}

export default function CategoryExamForm({
  category,
  title,
}: CategoryExamFormProps) {
  const { getExam, updateExamByKey } = usePatientStore();
  const { minimizeExamForm, minimizedExamForms } = useExamSectionStore();

  // Função para atualizar o valor do exame no store
  const handleExamChange = useCallback(
    (key: string, value: string) => {
      console.log("Alterando exame:", key, value);
      updateExamByKey(key, { value: String(value) }); // Convert value to string
    },
    [updateExamByKey]
  );

  if (minimizedExamForms.includes(category)) return null;

  const commonExams = mostCommonExams.filter(
    (exam) => exam.category === category
  );

  return (
    <div className="p-1.5 bg-zinc-600 rounded-lg shadow-md text-white ">
      <h2
        className="text-base font-medium mb-1 hover:bg-zinc-600 cursor-pointer"
        onClick={() => minimizeExamForm(category)}
      >
        {title}
      </h2>

      {commonExams.length > 0 ? (
        <div className="grid grid-cols-2 gap-0.5">
          {commonExams.map(({ key, inputType, options = [], ...examProps }) => {
            // Default options to an empty array
            const exam = getExam(key);
            const value = String(exam?.value || "");
            const Component =
              inputType === "select" ? ExamSelectInput : ExamInput;

            return (
              <Component
                key={key}
                id={key}
                {...examProps}
                options={options} // Ensure options is always an array
                value={value}
                onChange={handleExamChange}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-gray-300">Nenhum exame encontrado.</p>
      )}
    </div>
  );
}
