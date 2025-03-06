
import { GenericInputProps } from "../../../common/Inputs/types";
import ExamProfileForm from "../ExamForm/ExamForm";

export default function RenalProfileForm() {
  const renalProfileExams: GenericInputProps[] = [
    {
      name: "urea",
      label: "Ureia",
      type: "number",
      abbreviation: "Ur",
      placeholder: "Ur" 
    },
    {
      name: "creatinine",
      label: "Creatinina",
      type: "number",
      abbreviation: "Cr",
      placeholder: "Cr"
    },
    {
      name: "uricAcid",
      label: "Ac. Úrico",
      type: "number",
      abbreviation: "Ac. Úrico",
      placeholder: "Ac. Úrico"
    },
  ];

  return <ExamProfileForm title="Perfil Renal" inputs={renalProfileExams} />;
}