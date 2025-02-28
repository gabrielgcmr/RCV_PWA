import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { createExamInput } from "../../../common/ExamInput/ExamUtils";
import { IExamInputProps } from "../../../common/ExamInput/IExamInputProps";

export default function LiverProfileForm() {
  const lipidExams: IExamInputProps[] = [
    createExamInput("ALT (TGP)", "TGP", "TGP", "TGP"),
    createExamInput("AST (TGO)", "TGO", "TGO", "TGO"),
    createExamInput("GGT", "GGT", "GGT", "GGT"),
    createExamInput("Fosfatase Alcalina", "FA", "FA", "FA"),
  ];

  return <ExamProfileForm title="Perfil Hepático" exams={lipidExams} />;
}