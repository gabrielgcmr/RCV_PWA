import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { IExamInputProps } from "../../../common/ExamInput/ExamInput";

export default function GlucoseProfileForm() {
  const glucoseExams: IExamInputProps[] = [
    {
      name: "fastingGlucose",
      abbreviation: "GJ",
      label: "Glicemia de Jejum",
      placeholder: "Insira o valor",
      value: "",
    },
    {
      name: "hba1c",
      abbreviation: "HbA1c",
      label: "Hemoglobina Glicada",
      placeholder: "Insira o valor",
      value: "",
    },
  ];

  return <ExamProfileForm title="Perfil Glicêmico" exams={glucoseExams} />;
}
