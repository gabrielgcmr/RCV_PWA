import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { createExamInput } from "../../../common/ExamInput/ExamUtils";
import { ExamInputProps } from "../../../common/ExamInput/ExamInputProps";

export default function LiverProfileForm() {
  const lipidExams: ExamInputProps[] = [
    createExamInput("AST", "TGO", "AST", "AST"),
    createExamInput("ALT", "TGP", "ALT", "ALT"),
    createExamInput("GGT", "GGT", "GGT", "GGT"),
    createExamInput("Fosfatase Alcalina", "FA", "FA", "FA"),
  ];

  return <ExamProfileForm title="Perfil Hepático" exams={lipidExams} />;
}