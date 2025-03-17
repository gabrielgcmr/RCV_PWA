
import { examDictionary } from "../../constants/examDictionary";
import  usePatient  from "../../hooks/usePatient";
import { ExamInput } from "./ExamInput";
import { ExamSelectInput } from "./ExamSelectInput";


interface ExamCategoryFormProps {
  category: string; // Ex.: "LipidProfile", "LiverProfile", "RenalProfile"
  title: string;
}

export default function ExamCategoryForm({ category, title }: ExamCategoryFormProps) {
  const { handleExamChange, getExamValue } = usePatient();

  const exams = Object.entries(examDictionary)
    .filter(([, exam]) => exam.category === category)
    .map(([key, exam]) => ({ key, ...exam }));

  return (
    <div className="p-1.5 bg-zinc-600 rounded-lg shadow-md text-white">
      <h2 className="text-base font-medium mb-1">{title}</h2>

      {exams.length > 0 ? (
        <div className="grid">
          {exams.map(({ key, inputType, options =[], abbreviation, ...examProps }) =>
          inputType === "select" ? (
            <ExamSelectInput
              key={key}
              {...(examProps)}
              inputType= "select"
              name={key}
              abbreviation={abbreviation}
              placeholder={abbreviation}
              value={getExamValue(key) || ""}
              onChange={handleExamChange}
              options = {options}

            />
          ) : (
            <ExamInput
              key={key}
              {...(examProps)}
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
