import { examDictionary } from "../../../constants/examDictionary";
import { usePatient } from "@/hooks";
import { ExamInput } from "./ExamInput";
import { ExamSelectInput } from "./ExamSelectInput";
import { useExamSectionStore } from "@/store/useExamSectionStore";

interface ExamFormProps {
  category: string; // Ex.: "LipidProfile", "LiverProfile", "RenalProfile"
  title: string;
}

export default function ExamForm({ category, title }: ExamFormProps) {
  const { handleExamChange, getExamValue } = usePatient();
  const minimizedExamForms = useExamSectionStore(
    (state) => state.minimizedExamForms
  );
  const minimizeExamForm = useExamSectionStore(
    (state) => state.minimizeExamForm
  );

  if (minimizedExamForms.includes(category)) return null;
  const exams = Object.entries(examDictionary)
    .filter(([, exam]) => exam.category === category)
    .map(([key, exam]) => ({ key, ...exam }));

  return (
    <div className="p-1.5 bg-zinc-600 rounded-lg shadow-md text-white cursor-pointer transition hover:bg-zinc-600">
      <h2
        className="text-base font-medium mb-1 hover:bg-zinc-600"
        onClick={() => minimizeExamForm(category)}
      >
        {title}
      </h2>

      {exams.length > 0 ? (
        <div className="grid">
          {exams.map(
            ({ key, inputType, options = [], abbreviation, ...examProps }) =>
              inputType === "select" ? (
                <ExamSelectInput
                  key={key}
                  {...examProps}
                  inputType="select"
                  name={key}
                  abbreviation={abbreviation}
                  placeholder={abbreviation}
                  value={getExamValue(key) || ""}
                  onChange={handleExamChange}
                  options={options}
                />
              ) : (
                <ExamInput
                  key={key}
                  {...examProps}
                  inputType="input"
                  name={key}
                  abbreviation={abbreviation}
                  placeholder={abbreviation}
                  value={getExamValue(key) || ""}
                  onChange={handleExamChange}
                />
              )
          )}
        </div>
      ) : (
        <p className="text-sm text-gray-300">Nenhum exame encontrado.</p>
      )}
    </div>
  );
}
