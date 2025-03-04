import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { createExamInput } from "../../../../utils/CreateExamInput";
import { IExamInputProps } from "../../../common/ExamInput/IExamInputProps";

export default function RenalProfileForm() {
  const renalProfileExams: IExamInputProps[] = [
    createExamInput("urea", "Ur", "Ureia", "Ureia"),
    createExamInput("creatinine", "Cr", "Creatinina", "Creatinina"),
    createExamInput("uricAcid", "Ac. Úrico", "Ácido Úrico", "Ácido Úrico"),
  ];

  return <ExamProfileForm title="Perfil Renal" exams={renalProfileExams} />;
}