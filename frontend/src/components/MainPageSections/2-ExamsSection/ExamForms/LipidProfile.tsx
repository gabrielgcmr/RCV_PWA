import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { createExamInput } from "../../../../utils/CreateExamInput";
import { IExamInputProps } from "../../../common/ExamInput/IExamInputProps";

export default function LipidProfileForm() {
  const lipidExams: IExamInputProps[] = [
    createExamInput("totalCholesterol", "CT", "Colesterol Total", "Colesterol Total"),
    createExamInput("ldlCholesterol", "LDL", "LDL", "LDL"),
    createExamInput("hdlCholesterol", "HDL", "HDL", "HDL"),
    createExamInput("triglycerides", "Trig", "Trig", "Triglicerídeos"),
  ];

  return <ExamProfileForm title="Lipidograma" exams={lipidExams} />;
}
