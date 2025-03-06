import { GenericInputProps } from "../../../common/Inputs/types";
import ExamProfileForm from "../ExamForm/ExamForm";

export default function LipidProfileForm() {
  const lipidExams: GenericInputProps[] = [
    {
      name: "totalCholesterol",
      label: "Colesterol Total",
      type: "number",
      abbreviation: "CT",
      placeholder: "CT"
    },
    {
      name: "hdlCholesterol",
      label: "HDL",
      type: "number",
      abbreviation: "HDL",
      placeholder: "HDL"
    },
    {
      name: "ldlCholesterol",
      label: "LDL",
      type: "number",
      abbreviation: "LDL",
      placeholder: "LDL"
    },
    {
      name: "triglycerides",
      label: "Triglicerídeos",
      type: "number",
      abbreviation: "Trig.",
      placeholder: "Trig."
    },
  ];

  return <ExamProfileForm title="Lipidograma" inputs={lipidExams} />;
}
