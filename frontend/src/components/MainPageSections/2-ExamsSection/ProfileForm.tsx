import { ExamInput } from "./ExamInput";
import { examDictionary } from "../../common/constants/examDictionary";

interface ExamFormProps {
  category: string; // LipidProfile, LiverProfile, etc.
  title: string;
}

export default function ExamForm({ category, title }: ExamFormProps) {
  // 🔹 Filtra os exames que pertencem à categoria especificada
  const examKeys = Object.entries(examDictionary)
    .filter(([_, exam]) => exam.category === category)
    .map(([key]) => key) 
  
  return (
    <div className="p-2 bg-zinc-600 rounded-lg shadow-md text-white">
    <h2 className="text-pretty font-medium mb-1">{title}</h2>
    {examKeys.map((key) => (
      <ExamInput key={key} examKey={key} />
    ))}
  </div>
  );
}
