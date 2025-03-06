
import { GenericInputProps } from "../../../common/Inputs/types";
import ExamProfileForm from "../ExamForm/ExamForm";

export default function LiverProfileForm() {
  const lipidExams: GenericInputProps[] = [
    {
      name: "ALT",
      label: "ALT",
      type: "number",
      abbreviation: "TGO",
      placeholder: "TGO" 
    },
    {
      name: "AST",
      label: "AST",
      type: "number",
      abbreviation: "TGP",
      placeholder: "TGP"
    },
    {
      name: "GGT",
      label: "GGT",
      type: "number",
      abbreviation: "GGT",
      placeholder: "GGT"
    },
    {
      name: "alkaline_phosphatase",
      label: "FA",
      type: "number",
      abbreviation: "FA.",
      placeholder: "FA."
    },
  ];

  return <ExamProfileForm title="Perfil Hepático" inputs={lipidExams} />;
}