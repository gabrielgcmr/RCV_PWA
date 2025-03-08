import { examDictionary } from "../constants/examDictionary";
import { BaseInput } from "../Inputs/BaseInput";
import { SelectInput } from "../Inputs/SelectInput";

interface ExamFormProps {
  category: string; // Ex.: "LipidProfile", "LiverProfile", "RenalProfile", etc.
  title: string;
}

export default function ExamForm({ category, title }: ExamFormProps) {
  // Filtra os exames do dicionário pela categoria informada
  const exams = Object.entries(examDictionary)
    .filter(([, exam]) => exam.category === category)
    .map(([key, exam]) => ({ key, ...exam }));

  return (
    <div className="p-2 bg-zinc-400 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {exams.length > 0 ? (
        <div className="grid grid-cols-2 gap-2">
          {exams.map(({ key, type, label, abbreviation, options }) =>
            type === "select" ? (
              <SelectInput
                key={key}
                section="complementaryExams"
                name={key}
                type = "select"
                label={label}
                abbreviation={abbreviation}
                options={options!}
              />
            ) : (
              <BaseInput
                key={key}
                section = "complementaryExams"
                name = {key}
                label={label}
                abbreviation={abbreviation}
                type={type}
                placeholder={abbreviation}
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
