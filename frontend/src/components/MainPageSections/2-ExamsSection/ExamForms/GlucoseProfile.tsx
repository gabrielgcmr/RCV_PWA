
import { GenericInputProps } from "../../../common/Inputs/types";
import ExamProfileForm from "../ExamForm/ExamForm";

export default function GlucoseProfileForm() {
  const glucoseExams: GenericInputProps[] = [
    {
      name: "fastingGlucose",
      label: "GJ",
      type: "number",
      abbreviation: "GJ",
      placeholder: "GJ" 
    },
    {
      name: "hba1c",
      label: "HbA1c",
      type: "number",
      abbreviation: "HbA1c",
      placeholder: "HbA1c"
    }
  ];

  return <ExamProfileForm title="Perfil Glicêmico" inputs={glucoseExams} />;
}
