import { examDictionary } from "../../common/constants/examDictionary";
import { ExamInput } from "../../common/Inputs/ExamInput/ExamInputs";
import { ExamSelectInput } from "../Inputs/ExamInput/ExamSelectInput";


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
    <div className="p-2 bg-zinc-600 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {exams.length > 0 ? (
        <div className="grid grid-cols-2 gap-2">
          {exams.map(({ key, type, label, abbreviation, options }) =>
            type === "select" ? (
              <ExamSelectInput
                key={key}
                name={key}
                type = "select"
                label={label}
                abbreviation={abbreviation}
                formSection="complementaryExams"
                options={options || []}
              />
            ) : (
              <ExamInput
                key={key}
                name = {key}
                label={label}
                abbreviation={abbreviation}
                type={type}
                formSection="complementaryExams"
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
