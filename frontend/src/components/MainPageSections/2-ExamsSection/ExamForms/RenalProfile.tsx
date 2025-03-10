import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { createExamInput } from "../../../common/ExamInput/ExamUtils";
import { ExamInputProps } from "../../../common/ExamInput/ExamInputProps";

export default function RenalProfileForm() {
  const renalProfileExams: ExamInputProps[] = [
    createExamInput("urea", "Ur", "Ureia", "Ureia"),
    createExamInput("creatinine", "Cr", "Creatinina", "Creatinina"),
    createExamInput("uricAcid", "Ac. Úrico", "Ácido Úrico", "Ácido Úrico"),
  ];

  return <ExamProfileForm title="Perfil Renal" exams={renalProfileExams} />;
}