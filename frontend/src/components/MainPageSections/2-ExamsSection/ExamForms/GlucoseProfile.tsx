import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { createExamInput } from "../../../../utils/CreateExamInput";
import { IExamInputProps } from "../../../common/ExamInput/IExamInputProps";

export default function GlucoseProfileForm() {
  const glucoseExams: IExamInputProps[] = [
    createExamInput("fastingGlucose", "GJ", "Glicemia Jejum", "Glicemia de Jejum"),
    createExamInput("hba1c", "HbA1c", "HbA1c", "Hemoglobina Glicada"),
  ];

  return <ExamProfileForm title="Perfil Glicêmico" exams={glucoseExams} />;
}
