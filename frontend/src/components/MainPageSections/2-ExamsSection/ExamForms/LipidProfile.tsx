import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { createExamInput } from "../../../common/ExamInput/ExamUtils";
import { ExamInputProps } from "../../../common/ExamInput/IExamInputProps";

export default function LipidProfileForm() {
  const lipidExams: ExamInputProps[] = [
    createExamInput("totalCholesterol", "CT", "CT", "Colesterol Total"),
    createExamInput("ldlCholesterol", "LDL", "LDL", "LDL"),
    createExamInput("hdlCholesterol", "HDL", "HDL", "HDL"),
    createExamInput("triglycerides", "Trig", "Trig", "Triglicerídeos"),
  ];

  return <ExamProfileForm title="Lipidograma" exams={lipidExams} />;
}
