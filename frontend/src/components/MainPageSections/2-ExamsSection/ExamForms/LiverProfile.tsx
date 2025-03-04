import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { createExamInput } from "../../../../utils/CreateExamInput";
import { IExamInputProps } from "../../../common/ExamInput/IExamInputProps";

export default function LiverProfileForm() {
  const lipidExams: IExamInputProps[] = [
    createExamInput("ALT", "ALT", "TGO", "ALT"),
    createExamInput("AST", "AST", "TGP", "AST"),
    createExamInput("GGT", "GGT", "GGT", "GGT"),
    createExamInput("Fosfatase Alcalina", "FA", "FA", "FA"),
  ];

  return <ExamProfileForm title="Perfil Hepático" exams={lipidExams} />;
}